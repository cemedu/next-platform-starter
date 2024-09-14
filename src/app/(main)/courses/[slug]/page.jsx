import React from "react";
import CourseDetailsCard from "./CourseDetailsCard";
import Actions from "@/actions/actions";
import EmptyState from "@/components/empty-state/EmptyState";
import Components from "@/library/components";
import { GetSession } from "@/helper/GetSession";
import './style.css';

const page = async ({ params }) => {
  const token = GetSession();
  const { data: user } = await Actions.User.Info(token);
  const { data: all_courses } = await Actions.Course.GetAll();
  const { success, error, data } = await Actions.Course.Details(params?.slug);
  if (!success || !data?.id) {
    return <EmptyState msg={error || "No course found!"} />;
  }
  return (
    <Components.Container>
      <CourseDetailsCard data={data} user={user} courses={all_courses?.data} />
      <br />
      <br />
    </Components.Container>
  );
};

export default page;
