import Actions from '@/actions/actions';
import QuestionsCard1 from '@/components/cards/QuestionsCard1';
import EmptyState from '@/components/empty-state/EmptyState';
import Pagination from '@/components/pagination/Pagination';
import { GetSession } from '@/helper/GetSession';
import ResponseChecker from '@/helper/ResponseChecker';
import NavLink from '@/library/urls';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata({ params }) {

  const { category } = await params;
  let new_title = category.toLowerCase();

  return {
    title: `Top 100 Interview questions for ${new_title}.`,
    description: `Interview questions for ${new_title}. Find what you are looking for and get success as well!`,
    generator: 'Next.js',
    applicationName: 'interviewquestions.solutions',
    referrer: 'origin-when-cross-origin',
    keywords: `interview questions, top 10 interview questions , ${new_title} interview questions`,
  }
}

const page = async ({ params, searchParams }) => {
  const token = GetSession();
  const { data: user } = await Actions.User.Details(token);

  let search = `page=${searchParams.page || 1}&category=${params.category}&search=${searchParams.query}`;

  if (user && user?.order_list) {
    const cate = user.order_list.toString().includes(params.category);
    const full = user.order_list.toString().includes('Full');
    if (cate || full) {
      search = `${search}&paid=Yes`;
    }
  }

  const res = await Actions.Question.Filter(search);
  const { data: response_data, empty } = await ResponseChecker(res);

  if (empty) {
    return empty;
  }

  const { data = [], count: { paid = 0, free = 0, category_count = 0, filter_count = 0, current_page = 0, item_per_page = 0 } } = response_data;

  if (data.length < 1) {
    return (
      <>
        <div className=' px-2 pb-2 relative'>
          <h1 className='text-2xl font-bold'><span className='text-[var(--icon)]'>{decodeURI(params?.category)}</span> Questions</h1>
          <div className='flex items-center flex-wrap gap-3'>
            <p>Total : {category_count}</p>
            <p>Paid : {paid}</p>
            <p>Free : {free}</p>
            <p>Page : {searchParams.page || 1}</p>
          </div>
        </div>
        <EmptyState msg={"No questions found!"} />
      </>
    )
  }
  return (
    <>
      <div className=' px-2 pb-2'>
        <h1 className='text-2xl font-bold'><span className='text-[var(--icon)]'>{decodeURI(params?.category)}</span> Questions</h1>
        <div className='flex items-center flex-wrap gap-3'>
          <p>Total : {category_count}</p>
          <p>Paid : {paid}</p>
          <p>Free : {free}</p>
          <p>Page : {searchParams.page || 1}</p>
        </div>
      </div>


      <div className='questions'>
        <div>
          {data?.map((x) => {
            return (
              <div key={x._id}>
                <QuestionsCard1 data={x} />
              </div>
            )
          })}
        </div>

        <div className='hidden lg:block'>
          <div className='flex flex-col gap-y-3 max-h-screen overflow-y-auto no-scrollbar'>
            {data?.map((x) => {
              return (
                <div key={x._id}>
                  <Link href={`${NavLink?.questions}/${x?.category}/${x.url}`}>
                    <small> {x.title}</small>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <br />
      <br />

      <Pagination
        count={filter_count}
        page={current_page}
        url={`${NavLink.questions}/${params.category}`}
        limit={item_per_page}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default page;