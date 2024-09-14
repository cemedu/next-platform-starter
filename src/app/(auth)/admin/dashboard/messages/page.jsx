import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import MessageTable from './MessageTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };


  const res = await Actions.Message.GetAll(token);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['id', 'name', 'email', 'phone', 'message', 'subject'];


  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>Message Lists</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <MessageTable rows={data} cols={cols} token={token} />
          <br />
        </div>
      </>
    )
  }
}

export default page;