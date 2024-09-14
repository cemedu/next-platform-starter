import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import SecurityTable from './SecurityTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import Pagination from '@/components/pagination/Pagination';
import NavLink from '@/library/urls';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  const res = await Actions.Security.GetAll(token);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['ip', 'date', 'api', 'params', 'body'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>Security Data Lists</h1>
        <br />
        <SecurityTable rows={data.data} cols={cols} token={token} />

        <br />
        <br />
        <br />
        <Pagination
          count={data.count}
          page={data.current_page}
          url={`${NavLink.admin.security}`}
          limit={data.item_per_page}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    )
  }
}

export default page;