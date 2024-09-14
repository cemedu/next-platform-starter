import React from "react";
import Actions from "@/actions/actions";
import EmptyState from "@/components/empty-state/EmptyState";
import Components from "@/library/components";
import { GetSession } from "@/helper/GetSession";
import './style.css';
import ProjectDetailsCard from "./ProjectDetailsCard";

const page = async ({ params }) => {
  const token = GetSession();
  const { data: user } = await Actions.User.Info(token);
  const { data: all_projects } = await Actions.Project.GetAll();
  const { success, error, data } = await Actions.Project.Details(params?.slug);
  if (!success || !data?.id) {
    return <EmptyState msg={error || "No course found!"} />;
  }
  return (
    <Components.Container>
      <ProjectDetailsCard data={data} user={user} projects={all_projects?.data} />
      <br />
      <br />
    </Components.Container>
  );
};

export default page;
