import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import CommentsTable from './RatingsTable';
import { redirect } from 'next/navigation'
import { GetSession } from '@/helper/GetSession';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };


  const res = await Actions.Rating.GetAll(token);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['id', 'user_id', 'user name', 'user phone', 'project_id', 'course_id', 'rating', 'comment', 'createdAt'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>Comment Lists</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <CommentsTable rows={data} cols={cols} token={token} />
          <br />
        </div>
      </>
    )
  }
}

export default page;