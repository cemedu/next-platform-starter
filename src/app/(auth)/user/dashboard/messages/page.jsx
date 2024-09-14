import Actions from '@/actions/actions'
import React from 'react'
import MessageTable from './MessageTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import ResponseChecker from '@/helper/ResponseChecker';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  const res = await Actions.Message.FilterById(token, user?.id);
  console.log(res);

  const { data, empty } = await ResponseChecker(res);
  const cols = ['id', 'name', 'email', 'phone', 'message', 'subject'];

  if (empty) {
    return empty;
  }

  return (
    <>
      <br />
      <h1 className='text-2xl font-bold text-center'>Message Lists - ({data.counts || 0})</h1>
      <br />
      <div className='max-h-screen overflow-auto no-scrollbar'>
        <MessageTable rows={data?.data} cols={cols} />
        <br />
      </div>
    </>
  )
}

export default page;