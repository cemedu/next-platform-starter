'use client';
import Actions from '@/actions/actions';
import Loader from '@/components/loader/Loader';
import FileDownloader from '@/helper/FileDownloader';
import Category from '@/library/constants';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const DownloadCard = ({ user, searchParams }) => {
        const router = useRouter();
        useEffect(() => {
                if (!user.id) {
                        router.push('/404');
                }
                (async () => {
                        const temp = {};
                        if (searchParams?.id) {
                                const { success, error, data } = await Actions.Payment.Details(user.token, searchParams.id);
                                if (success) {
                                        temp.course_id = data?.course_id || null;
                                } else {
                                        toast.error(error || "Something went to wrong!");
                                        router.push('/');
                                }
                        } else {
                                toast.error("Something went to wrong!");
                                router.push('/');
                        }

                        if (temp?.course_id) {
                                const { success, error, data } = await Actions.Project.Details(temp?.course_id);
                                if (success) {
                                        temp.product_id = data?.id || null;
                                        temp.url = data?.file_url || null;
                                } else {
                                        toast.error(error || "Something went to wrong!");
                                        router.push('/');
                                }
                        } else {
                                toast.error("Something went to wrong!");
                                router.push('/');
                        }

                        if (temp.url && temp?.course_id && temp?.course_id === temp?.product_id) {
                                const path = encodeURIComponent(`/xyz/${Category.FilePath.path2}/${Category.FilePath.path1}/${temp.url}`);
                                await FileDownloader(path);
                                router.push('/');
                        } else {
                                toast.error("Please purchage again to download!");
                                router.push('/');
                        }
                })();
        }, [router, user.id, user.token, searchParams.id]);

        return (
                <div>
                        <Loader />
                </div>
        )
}

export default React.memo(DownloadCard);