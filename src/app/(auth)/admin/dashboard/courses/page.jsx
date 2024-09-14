import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import CourseTable from './CourseTable';
import NavLink from '@/library/urls';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { GetSession } from '@/helper/GetSession';
import CourseForm from '@/components/form/CourseForm';
import Pagination from '@/components/pagination/Pagination';

const page = async ({ searchParams }) => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };


  if (searchParams.id === 'new') {
    return <CourseForm token={token} />
  }

  const search = `xx=null&page=${searchParams.page}&limit=10`;
  const res = await Actions.Course.GetAll(search);
  const { data, empty } = await ResponseChecker(res);

  const cols = ['image', 'InFo', 'title', 'description'];

  if (empty) {
    return empty;
  }

  if (searchParams.p_id && searchParams.id === 'update') {
    const update = data.data.find(x => x._id === searchParams.p_id);
    return update ? <CourseForm token={token} Update={update} Id={searchParams.p_id} /> : null;
  }

  return (
    <>

      {!searchParams.id &&

        <>
          <br />
          <div className='flex justify-around'>
            <h1 className='text-2xl font-bold text-center'>Course Lists</h1>
            <Link href={`${NavLink.admin.courses || "#"}?id=new`}>New Course</Link>
          </div>
          <br />
          <div className='max-h-screen overflow-auto no-scrollbar'>
            <CourseTable rows={data.data} cols={cols} token={token} />
            <br />
          </div>
          <br />
          <Pagination
            count={data.filter_count}
            limit={data.item_per_page}
            url={NavLink.admin.courses}
          />
        </>
      }
    </>
  )
}


export default page;