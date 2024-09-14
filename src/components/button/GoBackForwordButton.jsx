'use client';
import Icons from '@/library/icons';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBackForwordButton = () => {
        const router = useRouter();
        return (
                <div className='flex justify-between items-center'>
                        <span
                                className='flex items-center gap-2 cp bg-[var(--bg3)] sm:p-2 rounded-full border text-2xl'
                                onClick={() => router.back()}
                        >
                                {Icons.Back}
                        </span>
                        <span
                                className='flex items-center gap-2 cp bg-[var(--bg3)] sm:p-2 rounded-full border text-2xl'
                                onClick={() => router.forward()}
                        >
                                {Icons.Forword}
                        </span>
                </div >
        )
}

export default GoBackForwordButton;