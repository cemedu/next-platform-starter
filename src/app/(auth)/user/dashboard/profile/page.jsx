import Actions from '@/actions/actions'
import React from 'react'
import { GetSession } from '@/helper/GetSession';
import { redirect } from 'next/navigation';
import ProfileCard from './ProfileCard';

const page = async () => {
  const token = GetSession();
  const { success, data: user } = await Actions.User.Details(token)
  if (!success || !user?.id) {
    redirect('/');
  };

  return (
    <>
      <br />
      <h1 className='text-2xl font-bold text-center'>{`${user.name}'s`} Profile</h1>
      <br />
      <ProfileCard user={user} token={token} />
      <br />
    </>
  )
}

export default page;