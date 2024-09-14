import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import PaymentTable from './PaymentTable';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async () => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  const res = await Actions.Payment.FilterById(token, user?.id);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['Payment Id', 'Amount(INR)', 'User Details', 'Cource Details', 'Razorpay Details', 'Is Paid', 'Date'];

  if (empty) {
    return empty;
  } else {
    return (
      <>
        <br />
        <h1 className='text-2xl font-bold'>Payment Lists  - ({data.counts || 0})</h1>
        <br />
        <div className='max-h-screen overflow-auto no-scrollbar'>
          <PaymentTable rows={data?.data} cols={cols} />
          <br />
        </div>
      </>
    )
  }
}

export default page;