import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import AnswerTable from './AnswerTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }) => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  const res = await Actions.Answer.GetAll(GetSession());
  const { data, empty } = await ResponseChecker(res);

  const edfg = data?.find(x => x._id === searchParams?.q_id)
  const cols = ['InFo', 'question', 'title', 'answer', 'createdAt'];


  if (empty) {
    return empty;
  } else {
    return (
      <>
        {!searchParams.id &&

          <>
            <br />
            <div className='flex justify-around'>
              <h1 className='text-2xl font-bold text-center'>Answers Lists</h1>
            </div>
            <br />
            <div className='max-h-screen overflow-auto no-scrollbar'>
              <AnswerTable rows={data} cols={cols} user={{ ...user, token }} />
              <br />
            </div>
          </>
        }
      </>
    )
  }
}

export default page;