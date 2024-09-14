import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import ProjectTable from './ProjectTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async () => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  const qyery = `access_type=Project&token=${token}`
  const res = await Actions.AccessToken.FilterById(qyery, user?.id);
  const { data, empty } = await ResponseChecker(res);

  const cols = ["token", "Purchase Date", "Expiry Date"];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold'>Purchased Project Lists - ({data.counts || 0})</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <ProjectTable rows={data?.data} cols={cols} user={{ ...user, token }} />
          <br />
        </div>
      </>
    )
  }
}

export default page;