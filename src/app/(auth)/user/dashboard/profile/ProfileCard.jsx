import UserUpdateForm from '@/components/form/UserUpdateForm';
import React from 'react'

const ProfileCard = ({ user, token }) => {
        return (
                <div className='flex justify-center items-center'>
                        <UserUpdateForm update={user} token={token} Id={user._id} />
                </div>
        )
}

export default ProfileCard;