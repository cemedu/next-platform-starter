import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import PaymentTable from './PaymentTable';
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

  const search = `xx=null&token=${token}&page=${searchParams.page}`;
  const res = await Actions.Payment.GetAll(search);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['InFo', 'Buyer', 'Cource', 'Razorpay'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold text-center'>Payment Lists</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <PaymentTable rows={data.data} cols={cols} token={token} />
          <br />
        </div>
        <br />
        <Pagination
          count={data.filter_count}
          limit={data.item_per_page}
          url={NavLink.admin.payments}
        />
      </>
    )
  }
}

export default page;