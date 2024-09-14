
import React from 'react';
import DownloadCard from './DownloadCard';
import { GetSession } from '@/helper/GetSession';
import Actions from '@/actions/actions';
import { redirect } from 'next/navigation';

const page = async ({ searchParams }) => {
        const token = GetSession();
        const { success, data: user } = await Actions.User.Info(token);
        if (!success || !user?.id && searchParams.id) {
                redirect('/');
        };

        return (
                <DownloadCard user={{ ...user, token }} searchParams={searchParams} />
        )
}

export default page