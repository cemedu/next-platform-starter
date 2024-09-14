import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import ProjectTable from './ProjectTable';
import NavLink from '@/library/urls';
import Link from 'next/link';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import ProjectForm from '@/components/form/ProjectForm';
import Pagination from '@/components/pagination/Pagination';

const page = async ({ searchParams }) => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  const search = `xx=null&page=${searchParams.page}&limit=1`;
  const res = await Actions.Project.GetAll(search);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['image', 'InFo', 'title', 'description'];

  if (searchParams.id === 'new') {
    return <ProjectForm token={token} />
  }

  if (empty) {
    return empty;
  }

  if (searchParams.p_id && searchParams.id === 'update') {
    const update = data.data.find(x => x._id === searchParams.p_id);
    console.log(data);
    return update ? <ProjectForm token={token} Update={update} Id={searchParams.p_id} /> : null;
  }

  return (
    <>
      {!searchParams.id &&
        <>
          <br />
          <div className='flex justify-around'>
            <h1 className='text-2xl font-bold text-center'>Project Lists</h1>
            <Link href={`${NavLink.admin.projects || "#"}?id=new`}>New Project</Link>
          </div>
          <br />
          <div className='max-h-screen overflow-auto no-scrollbar'>
            <ProjectTable rows={data.data} cols={cols} token={token} />
            <br />
          </div>
          <br />
          <Pagination
            count={data.filter_count}
            limit={data.item_per_page}
            url={NavLink.admin.projects}
          />
        </>
      }
    </>
  )
}

export default page;