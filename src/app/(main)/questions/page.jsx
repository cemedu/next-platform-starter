import Actions from '@/actions/actions';
import QuestionsCard1 from '@/components/cards/QuestionsCard1';
import EmptyState from '@/components/empty-state/EmptyState';
import Pagination from '@/components/pagination/Pagination';
import SetState from '@/context/SetState';
import { GetSession } from '@/helper/GetSession';
import ResponseChecker from '@/helper/ResponseChecker';
import NavLink from '@/library/urls';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata() {
  return {
    title: `Top 100 Interview questions for web developer.`,
    description: `Interview questions for web developer. Find what you are looking for and get success as well!`,
    generator: 'Next.js',
    applicationName: 'interviewquestions.solutions',
    referrer: 'origin-when-cross-origin',
    keywords: `interview questions, top 10 interview questions , web developer interview questions`,
  }
}


const page = async ({ searchParams }) => {

  const token = GetSession();
  const { data: user } = await Actions.User.Details(token);

  const { page, query } = searchParams;
  let search = `page=${page || 1}&search=${query || ''}`;
  if (user && user?.order_list) {
    const full = user.order_list.toString().includes('Full');
    if (full) {
      search = `${search}&paid=Yes`;
    }
  }

  const res = await Actions.Question.Filter(search);
  const { data: response_data, empty } = await ResponseChecker(res);

  if (empty) {
    return empty;
  }

  const { data = [], count: { filter_count = 0, current_page = 0, item_per_page = 0 } } = response_data;

  if (data.length < 1) {
    return <EmptyState msg={"No questions found!"} />
  }

  return (
    <>
      <div>
        <h1 className='text-2xl font-bold'>{decodeURI(query || 'All')} questions</h1>
        <div className='questions relative'>
          <div>
            {data?.map((x) => {
              return (
                <div key={x._id}>
                  <QuestionsCard1 data={x} />
                </div>
              )
            })}
          </div>
          <div className='hidden sm:block'>
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
        <Pagination
          count={filter_count}
          page={current_page}
          url={`${NavLink.questions}`}
          limit={item_per_page}
          query={searchParams.query}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

    </>
  )
}

export default page;