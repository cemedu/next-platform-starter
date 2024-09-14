import React from "react";
import DashboardCard from "./DashboardCard";
import Icons from "@/library/icons";
import NavLink from "@/library/urls";
import Container1 from "@/components/container/Container1";
import { GetSession } from "@/helper/GetSession";
import Actions from "@/actions/actions";

const page = async () => {
  const token = GetSession();
  const { success, error, data: user } = await Actions.User.Details(token);

  const sd = {
    project: await Actions.AccessToken.FilterById('Project', user.id),
    message: await Actions.Message.FilterById(token, user.id),
    course: await Actions.AccessToken.FilterById("Course", user.id),
    comment: await Actions.Comment.FilterById(token, user.id),
    answer: await Actions.Answer.FilterById(token, user.id),
    notification: await Actions.Notification.FilterById(token, user.id),
    payment: await Actions.Payment.FilterById(token, user?.id)
  }

  const datadsd = [
    {
      title: "projects",
      url: NavLink.user.projects,
      icon: Icons.Project,
      count: sd.project?.data?.counts || 0
    },
    {
      title: "messages",
      url: NavLink.user.messages,
      icon: Icons.Message,
      count: sd.message?.data?.counts || 0
    },
    {
      title: "courses",
      url: NavLink.user.courses,
      icon: Icons.Courses,
      count: sd.course?.data?.counts || 0
    },
    {
      title: "comments",
      url: NavLink.user.comments,
      icon: Icons.Comment,
      count: sd.comment?.data?.counts || 0
    },
    {
      title: "answers",
      url: NavLink.user.answers,
      icon: Icons.Info,
      count: sd.answer?.data?.counts || 0
    },
    {
      title: "notifications",
      url: NavLink.user.notifications,
      icon: Icons.Notification,
      count: sd.notification?.data?.counts || 0
    },
    {
      title: "payments",
      url: NavLink.user.payments,
      icon: Icons.Payment,
      count: sd.payment?.data?.counts || 0
    },
  ];

  return (
    <Container1>
      <br />
      <h1 className='text-3xl text-[var(--text1)] font-bold'>{user?.name} Dashboard</h1>
      <br />
      <DashboardCard data={datadsd} />
      <br />
    </Container1>
  );
};

export default page;
