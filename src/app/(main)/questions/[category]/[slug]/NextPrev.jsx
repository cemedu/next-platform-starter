'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const NextPrev = ({ searchParams, ulr }) => {
        const [s, setS] = useState(0);
        const router = useRouter();
        const NextForword = () => {
                setS(s + 1);
                router.push(`${ulr}?show=y&que=${s}`);
        }
        return (
                <div className='flex justify-between items-center'>
                        <span onClick={NextForword} className='btn'>Prev</span>
                        <span onClick={NextForword} className='btn'>Next</span>

                </div>
        )
}

export default NextPrev