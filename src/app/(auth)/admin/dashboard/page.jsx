import React from 'react'
import DashboardCard from './DashboardCard';
import Icons from '@/library/icons';
import NavLink from '@/library/urls';
import Container1 from '@/components/container/Container1';
import Actions from '@/actions/actions';
import { GetSession } from '@/helper/GetSession';



const page = async () => {
  const token = GetSession();
  const { data = {} } = await Actions.Admin.Counts(token);

  const datadsd = [
    {
      title: "Blogs",
      count: data?.blogs || 0,
      url: NavLink.admin.blogs,
      icon: Icons.Blogs
    },
    {
      title: 'Users',
      count: data?.users || 0,
      url: NavLink.admin.users,
      icon: Icons.UserPlus
    },
    {
      title: 'Projects',
      count: data?.projects || 0,
      url: NavLink.admin.projects,
      icon: Icons.Project
    },
    {
      title: 'Messages',
      count: data?.messages || 0,
      url: NavLink.admin.messages,
      icon: Icons.Message
    },
    {
      title: 'Courses',
      count: data?.courses || 0,
      url: NavLink.admin.courses,
      icon: Icons.Courses
    },
    {
      title: 'Pricing',
      count: data?.pricing || 0,
      url: NavLink.admin.pricing,
      icon: Icons.Rupees
    },
    {
      title: 'Comments',
      count: data?.comments || 0,
      url: NavLink.admin.comments,
      icon: Icons.Comment
    },
    {
      title: 'Answers',
      count: data?.answers || 0,
      url: NavLink.admin.answers,
      icon: Icons.Info
    },
    {
      title: 'Notifications',
      count: data?.notifications || 0,
      url: NavLink.admin.notifications,
      icon: Icons.Notification
    },
    {
      title: 'Payments',
      count: data?.payments || 0,
      url: NavLink.admin.payments,
      icon: Icons.Payment
    },
    {
      title: 'Questions',
      count: data?.questions || 0,
      url: NavLink.admin.questions,
      icon: Icons.Info
    },
    {
      title: 'Securities',
      count: data?.security || 0,
      url: NavLink.admin.security,
      icon: Icons.Security
    }
  ];


  return (
    <Container1>
      <br />
      <h1 className='text-3xl text-[var(--text1)] font-bold'>Admin Dashboard</h1>
      <br />
      <DashboardCard data={datadsd} />
    </Container1>
  )
}

export default page;