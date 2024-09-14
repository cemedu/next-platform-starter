import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import PricingTable from './PricingTable';
import NavLink from '@/library/urls';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { GetSession } from '@/helper/GetSession';
import Pagination from '@/components/pagination/Pagination';
import PricingForm from '@/components/form/PricingForm';

const page = async ({ searchParams }) => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };


  if (searchParams.id === 'new') {
    return <PricingForm token={token} />
  }

  const search = `xx=null&page=${searchParams.page}&limit=1`;
  const res = await Actions.Pricing.GetAll(search);
  const { data, empty } = await ResponseChecker(res);

  const cols = ["Info", "Duration", 'Description', "Points", 'Create Date'];

  if (empty) {
    return empty;
  }

  if (searchParams.p_id && searchParams.id === 'update') {
    const update = data.data.find(x => x._id === searchParams.p_id);
    return update.id ? <PricingForm token={token} Update={update} Id={searchParams.p_id} /> : null;
  }

  return (
    <>

      {!searchParams.id &&

        <>
          <br />
          <div className='flex justify-around'>
            <h1 className='text-2xl font-bold text-center'>Pricing Lists</h1>
            <Link href={`${NavLink.admin.pricing || "#"}?id=new`}>New Pricing</Link>
          </div>
          <br />
          <div className='max-h-screen overflow-auto no-scrollbar'>
            <PricingTable rows={data.data} cols={cols} token={token} />
            <br />
          </div>
          <br />
          <Pagination
            count={data.filter_count}
            limit={data.item_per_page}
            url={NavLink.admin.pricing}
          />
        </>
      }
    </>
  )
}


export default page;