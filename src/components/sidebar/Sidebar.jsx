'use client';
import Icons from '@/library/icons';
import Link from 'next/link'
import React, { useContext } from 'react';
import './style.css';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import PageReload from '@/helper/PageReload';

const Sidebar = ({ navigation = [], role = 'User' }) => {
    const { dispatch } = useContext(Context);
    const router = useRouter();
    const LogOutHandler = async () => {
        dispatch({ type: StoreAction.logout, payload: {} });
        const { success, error, message } = await Actions.User.Logout();
        if (success) {
            toast.success(message);
            router.push('/');
            PageReload();
        } else {
            toast.error(error)
        }
    }

    return (
        <div className="mx-auto p-2 bg-[var(--bg2)]">
            <div className='mb-2'>
                <h2 className='text-xl font-bold text-center'>{role}</h2>
            </div>
            <div className='mb-2'>
                {navigation.map((x) => (
                    <Link key={x?.name} href={x?.url} className="flex gap-2 items-center py-2 admin_sidebar" >{x?.icon} {x?.name}</Link>
                ))}
            </div>
            <br />
            <div className='my-2'>
                <Link href={"/"} className="flex gap-2 items-center admin_sidebar" onClick={LogOutHandler}>{Icons.User} {"Logout"}</Link>
            </div>

        </div>
    )
}

export default React.memo(Sidebar);