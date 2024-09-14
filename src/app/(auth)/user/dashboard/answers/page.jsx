import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import AnswerTable from './AnswerTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }) => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  const res = await Actions.Answer.FilterById(token, user?.id);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['id', 'user_id', 'user_name', 'question_id', 'title', 'answer', 'createdAt'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        {!searchParams.id &&
          <>
            <br />
            <div>
              <h1 className='text-2xl font-bold'>Answers Lists - ({data.counts})</h1>
            </div>
            <br />
            <div className='max-h-screen overflow-auto no-scrollbar'>
              <AnswerTable rows={data?.data} cols={cols} />
              <br />
            </div>
          </>
        }
      </>
    )
  }
}

export default page;