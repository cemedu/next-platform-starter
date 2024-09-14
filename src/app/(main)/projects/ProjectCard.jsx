"use client";
import Button1 from "@/components/button/Button1";
import StoreAction from "@/context/context.action";
import { Context } from "@/context/StateProvider";
import Icons from "@/library/icons";
import NavLink from "@/library/urls";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const ProjectsCard = ({ data = {}, user = {} }) => {
  const router = useRouter();
  const { dispatch } = useContext(Context);
  const BuyNow = async (d) => {

    const payload = {
      id: d.id,
      price: d.price,
      access_type: d.access_type, // course | project
      access_only: d.access_only, // full | javascript | node js
      access_days: d.access_days,  // 30 days
      title: d.title,  // 30 days
    }

    try {
      if (user?.id) {
        dispatch({ type: StoreAction.data, payload: payload });
        router.push(NavLink.payment);
      } else {
        toast.error("Please login to purchage!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col border-[0.5px] p-3 rounded-md relative">

        <div className="absolute top-1 left-1">
          <span className="px-2 p1 rounded-md text-[var(--text1)] bg-[var(--bg1)] font-bold">{data.offer}% off</span>
        </div>
        <div className="w-full max-h-[160px] overflow-hidden rounded-md">
          <Image
            src={data?.image?.url}
            alt={data.title}
            width={2500}
            height={1800}
            className="min-h-[160px]"
          />
        </div>

        <div className="">
          <h1 className="text-xl sm:text-xl font-bold limit2">{data?.title}</h1>
          <div className="py-1">
            <span className="flex items-center gap-2">{Icons.ReactJs}{data?.category}</span>
            <span className="flex items-center gap-2">{Icons.Rupees} <span className="amount">{data?.mrp}</span> <b>{data.price}</b></span>
            <span className="flex items-center gap-2">{Icons.Star} You save {data?.offer || 0}% Or Rs {data.mrp - data.price || 0} </span>
          </div>
          <p className="py-1 limit2">{data?.description}</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href={`${NavLink.projects}/${data.id}`}>
              <Button1 value={"Details"} />
            </Link>
            <Button1 value={"Buy now"} onClick={() => BuyNow(data)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
