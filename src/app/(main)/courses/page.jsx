import React from "react";
import CourseCard from "./CourseCard";
import Actions from "@/actions/actions";
import EmptyState from "@/components/empty-state/EmptyState";
import Components from "@/library/components";
import { GetSession } from "@/helper/GetSession";

const page = async () => {
  const token = GetSession();
  const { data: user } = await Actions.User.Info(token);
  const { success, error, data = [] } = await Actions.Course.GetAll();
  if (!success || data.length < 1) {
    return <EmptyState msg={error || "No course found!"} />;
  }
  return (
    <Components.Container>
      <br />
      <h1 className="text-3xl font-bold">Our Best Courses</h1>
      <br />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data?.data?.map((x, i) => (
          <CourseCard key={i} data={x} user={user} />
        ))}
      </div>
      <br />
      <br />
    </Components.Container>
  );
};

export default page;
