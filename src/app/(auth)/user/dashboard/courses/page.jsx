import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import CourseTable from './CourseTable';

const page = async () => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  const qyery = `access_type=course&token=${token}`
  const res = await Actions.AccessToken.FilterById(qyery, user?.id);
  const { data, empty } = await ResponseChecker(res);

  const cols = ["id", "user_id", "access_type", "token", "payment_id", "expire", "createdAt"];
  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold'>Purchased Courses Lists - ({data.counts})</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <CourseTable rows={data?.data} cols={cols} token={token} />
          <br />
        </div>
      </>
    )
  }
}

export default page;