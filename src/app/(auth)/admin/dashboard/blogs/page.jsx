import Actions from '@/actions/actions'
import ResponseChecker from '@/helper/ResponseChecker';
import React from 'react'
import BlogTable from './BlogTable';
import { Fields } from '@/library/inputs';
import PageForm from '@/components/form/PageForm';
import Link from 'next/link';
import NavLink from '@/library/urls';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }) => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };


  const res = await Actions.Blog.GetAll();
  const { data, empty } = await ResponseChecker(res);

  const edfg = data?.find(x => x._id === searchParams?.q_id)
  const cols = ['id', 'title', 'description', 'author', 'tags', 'createdAt'];


  if (empty) {
    return empty;
  } else {
    return (
      <>
        {searchParams.id === 'new' && <PageForm
          PageTitle={"New Blog Form"}
          InputField={[Fields.title]}
          TextareaField={[Fields.description, Fields.answer]}
          Fetch={{ Type: "Question", Action: "Create" }}
        />}

        {searchParams.id === 'update' && <PageForm
          PageTitle={"New Blog Form"}
          InputField={[Fields.title]}
          TextareaField={[Fields.description, Fields.answer]}
          Update={{ ...edfg }}
          Fetch={{ Type: "Question", Action: "Create" }}
        />}

        {!searchParams.id &&

          <>
            <br />
            <div className='flex justify-around'>
              <h1 className='text-2xl font-bold text-center'>Blog Lists</h1>
              <Link href={`${NavLink.admin.blogs || "#"}?id=new`}>New Blog</Link>
            </div>
            <br />
            <div className='max-h-screen overflow-auto no-scrollbar'>
              <BlogTable rows={data.data} cols={cols} token={token} />
              <br />
            </div>
          </>
        }
      </>
    )
  }
}

export default page;