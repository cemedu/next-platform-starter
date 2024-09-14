'use client';
import CodeViews from '@/components/views/CodeViews';
import StoreAction from '@/context/context.action';
import { Context } from '@/context/StateProvider';
import Icons from '@/library/icons';
import NavLink from '@/library/urls';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import ProjectCard from '../ProjectCard';
import EmptyState from '@/components/empty-state/EmptyState';
import Actions from '@/actions/actions';
import CommentCard from '@/components/cards/CommentCard';
import CommentForm from '@/components/form/CommentForm';

const ProjectDetailsCard = ({ data, user, projects = [] }) => {
  const router = useRouter();
  const [rating, setReting] = useState({});
  const { dispatch, state: { loading, show } } = useContext(Context);

  const BuyNow = async (d) => {

    const payload = {
      id: d.id,
      price: d.price,
      access_type: d.access_type, // course | project
      access_only: d.access_only, // full | javascript | node js
      access_days: d.access_days,  // 30 days
      title: d.title,  // 30 days
    }

    try {
      if (user?.id) {
        dispatch({ type: StoreAction.data, payload: payload });
        router.push(NavLink.payment);
      } else {
        toast.error("Please login to purchage!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const GetComments = async (d) => {
    const { success, data: ratings, error } = await Actions.Rating.FilterById(data.id);
    console.log(ratings);
    if (success) {
      if (ratings.length < 1) {
        toast.success('No reviews found!');
      }
      setReting(ratings)
      dispatch({ type: StoreAction.show, payload: [false, null] });
    } else {
      toast.error(error);
    }
  };

  const CommentHandler = () => {
    if (!user?.id) {
      toast.error('Please login to review!');
      return;
    } else {
      setReting({});
      dispatch({ type: StoreAction.show, payload: [true, 'comment_form'] });
    }
  }

  return (
    <>
      <br />
      <div className='bg-[var(--bg2)] rounded-md sm:p-4'>
        <div className='project_details'>
          <div>
            <Image className='rounded-md' src={data.image.url} alt={data.title} width={2500} height={2000} />
          </div>
          <div>
            <h1 className='text-xl md:text-4xl font-bold'>{data?.title}</h1>
            <br />
            <div className="py-1">
              <span className="flex items-center gap-2">{Icons[data.category]}{data?.category}</span>
              <span className="flex items-center gap-2">{Icons.Rupees} <span className="amount">{data?.mrp}</span> <b>{data.price}</b></span>
              <span className="flex items-center gap-2">{Icons.Star} You save {data?.offer || 0}% Or Rs {data.mrp - data.price || 0} </span>
              <span className="flex items-center gap-2">{Icons.Security}{data?.access_days} days validity</span>
              <span className="flex items-center gap-2">{Icons.Update}{data?.updatedAt.substring(0, 10)} last updated</span>
            </div>
            <br />
            <div className='grid sm:grid-cols-3 gap-3'>
              <span
                onClick={() => BuyNow(data)}
                className='flex items-center justify-center gap-2 px-3 p-1 border-[0.5px] border-[var(--icon)] rounded-md cp'
              >
                {Icons.Auth}{"Buy now"}
              </span>
              <span
                onClick={CommentHandler}
                className='flex items-center justify-center gap-2 px-3 p-1 border-[0.5px] border-[var(--icon)] rounded-md cp'
              >
                {Icons.Star}{"Give star"}
              </span>
              <span
                onClick={GetComments}
                className='flex items-center justify-center gap-2 px-3 p-1 border-[0.5px] border-[var(--icon)] rounded-md cp'
              >
                {Icons.Comment}{"Reviews"}
              </span>
            </div>
            <br />
            {rating?.data && (rating?.data?.length > 0 ? <CommentCard data={rating} /> : <EmptyState msg={'No reviews found!'} />)}
            {show[0] && show[1] === 'comment_form' && <CommentForm id={data.id} access_type={data.access_type} />}
            <br />
            <div>
              <div><h2 className='text-2xl font-bold text-[var(--text1)] py-2'>Technologies used</h2></div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {data?.points?.split(',').map((y) => (
                  <li className="flex items-center space-x-3" key={y}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-[var(--text1)]">{y}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='py-4'>
              <div><h2 className='text-2xl font-bold text-[var(--text1)] py-2'>Product details</h2></div>
              <CodeViews code={data.description} fontSize={18} />
            </div>
          </div>
        </div>
        <br />
        <div><h2 className='text-2xl font-bold text-[var(--text1)] py-2'>Other projects</h2></div>
        <hr />
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {projects.length > 0 ? projects.map((x, i) => (
            <ProjectCard key={i} data={x} user={user} />
          )) : <EmptyState />}
        </div>
      </div>
    </>
  )
}

export default ProjectDetailsCard;