import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import NotificationTable from './NotificationTable';
import { redirect } from 'next/navigation';
import { GetSession } from '@/helper/GetSession';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };


  const res = await Actions.Notification.FilterById(token, user?.id);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['id', 'user_id', 'notification', 'createdAt'];


  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>Notification Lists - ({data.counts || 0})</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <NotificationTable rows={data.data} cols={cols} />
          <br />
        </div>
      </>
    )
  }
}

export default page;