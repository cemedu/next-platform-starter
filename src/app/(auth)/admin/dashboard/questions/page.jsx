import React from 'react'
import QuestionTable from './QuestionTable';
import Actions from '@/actions/actions';
import ResponseChecker from '@/helper/ResponseChecker';
import Link from 'next/link';
import NavLink from '@/library/urls';
import QuestionForm from '@/components/form/QuestionForm';
import Pagination from '@/components/pagination/Pagination';
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import AdminSearchCard from '@/components/cards/AdminSearchCard';


const page = async ({ searchParams }) => {

  const token = GetSession();
  const { success, data: user } = await Actions.User.Info(token)
  if (!success || user?.role === '' || user?.role !== 'admin') {
    redirect('/');
  };

  let search = `id=${searchParams?.id || ''}&title=${searchParams?.title || ''}&paid=${searchParams?.paid || ''}&page=${searchParams?.page || 1}&category=${searchParams?.category || ''}&answer=${searchParams?.answer || ''}&description=${searchParams?.description || ''}&createdAt=${searchParams?.createdAt || ''}&limit=10`;
  const res = await Actions.Question.GetAll(search);
  const { data, empty } = await ResponseChecker(res);
  const cols = ['id', 'title', 'category', 'description', 'answer', 'paid', 'createdAt'];


  if (empty) {
    return empty;
  }

  if (searchParams?.q_id && searchParams.id === 'update') {
    const details = await Actions.Question.Details(searchParams?.update_id);
    return < QuestionForm Update={details.data} Id={searchParams?.q_id} />
  }

  if (searchParams.id === 'new') {
    return <QuestionForm token={token} />
  }

  return (
    <>
      <br />
      <div className='flex justify-around'>
        <h1 className='text-2xl font-bold text-center'>Question Lists</h1>
        <Link href={`${NavLink.admin.questions || "#"}?id=new`}>New Questions</Link>
      </div>
      <div>
        <AdminSearchCard url={NavLink.admin.questions} cols={cols} />
      </div>
      <br />
      <div className='max-h-screen overflow-auto no-scrollbar'>
        <QuestionTable rows={data.data} cols={cols} token={token} />
        <br />
      </div>
      <Pagination
        count={data.filter_count}
        limit={data.item_per_page}
        url={NavLink.admin.questions}
      />
      <br />
      <br />
    </>
  )
}

export default page;