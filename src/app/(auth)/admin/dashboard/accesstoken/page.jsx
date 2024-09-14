import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import AccessTokenTable from './AccessTokenTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }) => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  const res = await Actions.AccessToken.GetAll(token);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['id', 'user_id', 'payment_id', 'createdAt', 'expire'];


  if (empty) {
    return empty;
  } else {
    return (
      <>
        {!searchParams.id &&
          <>
            <br />
            <div className='flex justify-around'>
              <h1 className='text-2xl font-bold text-center'>Token Lists</h1>
            </div>
            <br />
            <div className='max-h-screen overflow-auto no-scrollbar'>
              <AccessTokenTable rows={data} cols={cols} token={token} />
              <br />
            </div>
          </>
        }
      </>
    )
  }
}

export default page;