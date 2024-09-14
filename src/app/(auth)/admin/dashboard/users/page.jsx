import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import UserTable from './UserTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import Pagination from '@/components/pagination/Pagination';
import NavLink from '@/library/urls';

const page = async ({ searchParams }) => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  const search = `xx=null&token=${token}&page=${searchParams.page}&limit=2`;
  const res = await Actions.User.GetAll(search);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['id', 'name', 'email', 'phone', 'role', 'verified', 'createdAt'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>User Lists</h1>
        <br />
        <UserTable rows={data?.data || []} cols={cols} token={token} />
        <br />
        <Pagination
          count={data.filter_count}
          limit={data.item_per_page}
          url={NavLink.admin.users}
        />
      </>
    )
  }
}

export default page;