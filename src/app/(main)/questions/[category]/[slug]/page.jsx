import EmptyState from '@/components/empty-state/EmptyState';
import React from 'react';
import QuestionDetails from './QuestionDetails';
import QuestionsCard1 from '@/components/cards/QuestionsCard1';
import Link from 'next/link';
import NavLink from '@/library/urls';
import Actions from '@/actions/actions';
import ResponseChecker from '@/helper/ResponseChecker';
import Pagination from '@/components/pagination/Pagination';
import { GetSession } from '@/helper/GetSession';

export async function generateMetadata({ params }) {

  const { slug, category } = await params;
  const res = await Actions.Question.Details(slug);
  const { data } = res;

  return {
    title: data?.title,
    description: data?.description,
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: `interview questions, top 25 interview questions for web developer, ${category} interview questions`,
    publisher: 'srisir.com',

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: 'https://www.interviewquestions.solutions/',
    alternates: {
      canonical: `https://www.interviewquestions.solutions`,
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
      images: 'data?.img?.url',
    },
  }
}

const page = async ({ params, searchParams }) => {
  const token = GetSession();
  const { data: user } = await Actions.User.Details(token);

  let query = `page=${searchParams.page || 1}&category=${params.category}`;

  if (user && user?.order_list) {
    const cate = user.order_list.toString().includes(params.category);
    const full = user.order_list.toString().includes('Full');
    if (cate || full) {
      query = `page=${searchParams.page || 1}&category=${params.category}&paid=Yes`;
    }
  }

  const res = await Actions.Question.Filter(query);
  const { data: response_data, empty } = await ResponseChecker(res);
  const { data = [], count: { paid = 0, free = 0, category_count = 0, filter_count = 0, current_page = 0, item_per_page = 0 } } = response_data;

  const id = params.slug.split('-')[0];
  const res1 = await Actions.Question.Details(id);

  if (empty) {
    return empty;
  }

  if (!res1?.data?.id) {
    return <EmptyState msg={"No questions found!"} />
  }

  if (data?.length < 1) {
    return <EmptyState msg={"No questions found!"} />
  }

  let next_id = 1;
  if (data?.length - 4 > Number(searchParams.next_id) && Number(searchParams.next_id) > 1) {
    next_id = searchParams.next_id ? Number(searchParams.next_id) : 1;
  } else {
    next_id = 1;
  }
  return (
    <>
      <div className='questions relative'>
        <div>
          <span className='text-2xl font-bold'><span className='text-[var(--icon)]'>{decodeURI(params?.category)}</span></span>
          <br />
          <div className='bg-[var(--bg2)] p-2 sm:p-4 rounded-lg'>
            <div className='flex justify-between items-center'>

              {data[next_id - 1]?.id && <Link href={`${NavLink?.questions}/${res1.data?.category}/${data[next_id - 1].id}?next_id=${next_id - 1}`}>
                <span className='btn'>Prev</span>
              </Link>
              }

              {data[next_id + 1]?.id && <Link href={`${NavLink?.questions}/${res1.data?.category}/${data[next_id + 1].id}?next_id=${next_id + 1}`}>
                <span className='btn'>Next</span>
              </Link>
              }
            </div>
            <br />
            <QuestionDetails data={res1.success ? res1.data : {}} />
          </div>
          <br />

          <h2 className='text-3xl font-bold text-center p-2'>Related Questions</h2>

          <div className='flex items-center flex-wrap gap-3'>
            <span>Total : {category_count}</span>
            <span>Paid :{paid}</span>
            <span>Free :{free}</span>
          </div>

          <div>
            {data.map((x) => (
              <div key={x._id}>
                <QuestionsCard1 data={x} />
              </div>
            ))}
          </div>
        </div>

        <div className='hidden md:block'>
          <div className='flex flex-col gap-y-3 max-h-screen overflow-y-auto no-scrollbar'>
            {data?.map((x) => {
              return (
                <div key={x._id}>
                  <Link href={`${NavLink?.questions}/${x?.category}/${x.id}`}>
                    <small> {x.title}</small>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div >


      <br />

      {
        filter_count !== 0 &&
        <Pagination
          count={filter_count}
          page={current_page}
          url={`${NavLink.questions}/${params.category}/${res1.data.url}`}
          limit={item_per_page}
        />
      }
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