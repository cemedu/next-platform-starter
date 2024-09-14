"use client";
import React from "react";
import "./style.css";
import Icons from "@/library/icons";
import Container2 from "@/components/container/Container2";
import Actions from "@/actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProjectTable = ({ rows = [], cols = [], user = {} }) => {
  const router = useRouter();
  const DownloadHandler = async (id) => {
    const temp = {};
    try {
      if (user?.id) {
        const { success, error, data } = await Actions.AccessToken.Details(user?.token, id);
        if (success) {
          temp.payment_id = data?.payment_id || null;
        } else {
          toast.error(error || "Something wrong to get access token.");
        }
      } else {
        toast.error("Please login to download.");
        return;
      }

      if (temp?.payment_id) {
        const uri = `/download?id=${temp.payment_id}`;
        router.push(uri);
      } else {
        toast.error("Please purchage again to download!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container2>
      <table>
        <thead>
          <tr>
            <th>Info</th>
            {cols.map((x) => (
              <th key={x}>{x}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((x) => (
            <tr key={x.id}>
              <td>
                Id : {x.id} <hr />
                User Id : {x.user_id} <hr />
                Type : {x.access_type} <hr />
                Payment Id : {x.payment_id} <hr />
              </td>
              <td>{x.token}</td>
              <td>{`${new Date(x.createdAt)}`.substring(0, 25)}</td>
              <td>{`${new Date(x.expire)}`.substring(0, 25)}</td>
              <td>
                <div className="flex gap-3 cp">
                  <span
                    onClick={() => DownloadHandler(x.token)}
                    className="cp flex items-center gap-1"
                  >
                    {Icons.Download} Download now
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container2>
  );
};

export default React.memo(ProjectTable);
