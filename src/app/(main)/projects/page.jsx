import React from "react";
import Actions from "@/actions/actions";
import EmptyState from "@/components/empty-state/EmptyState";
import Components from "@/library/components";
import { GetSession } from "@/helper/GetSession";
import ProjectsCard from "./ProjectCard";

const page = async () => {
  const token = GetSession();
  const { data: user } = await Actions.User.Info(token);
  const { success, error, data = [] } = await Actions.Project.GetAll();
  if (!success || data.length < 1) {
    return <EmptyState msg={error || "No course found!"} />;
  }

  // let ddd = Array(8)?.fill(...data)
  return (
    <Components.Container>
      <br />

      <h1 className="text-3xl font-bold">Our Best Projects</h1>
      <br />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data?.data?.map((x, i) => (
          <ProjectsCard key={i} data={x} user={user} />
        ))}
      </div>
      <br />
      <br />
    </Components.Container>
  );
};

export default page;
