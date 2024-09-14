'use client';
import Icons from '@/library/icons';
import React, { useContext, useState } from 'react';
import CodeViews from '../views/CodeViews';
import QuestionForm from '../form/QuestionForm';
import { Context } from '@/context/StateProvider';
import NavLink from '@/library/urls';
import Link from 'next/link';
import './style.css';

const QuestionCard1 = ({ data = {} }) => {
    const [sd, setSd] = useState(null);
    const { state: { user } } = useContext(Context);

    return (
        <div className="border border-[var(--text2)] rounded-lg overflow-hidden mb-2">
            <div className="px-2 py-2 sm:px-6 sm:py-4 space-y-2">
                <div className='actionst'>
                    <h2 className="sm:text-2xl font-bold">
                        <CodeViews fontSize={22} code={data.title} />
                    </h2>
                    <Link className='border-[var(--icon)] border-[0.5px] flex items-center justify-center rounded-md' href={`${NavLink?.questions}/${data?.category}/${data.url}`}>
                        <span className='text-[var(--text1)] flex items-center gap-2 p-1'>{Icons.Details}More details</span>
                    </Link>
                    {user.role === 'admin' && <span onClick={() => setSd(data.id)}>{Icons.Edit}</span>}
                </div>
                <div className="sm:flex items-center gap-2 sm:gap-5">
                    <small className='flex items-center gap-1'>{Icons.Update}{Date(data?.updatedAt).substring(3, 15)} last updated</small>
                    <small className='flex items-center gap-1'>{Icons.Rupees}{data?.paid === 'No' ? "Free" : "Paid"}</small>
                    <small className='flex items-center gap-1'>{Icons.Courses}{data?.category}</small>
                </div>
                <br />
                <div>
                    <CodeViews fontSize={18} code={data.answer} />
                </div>
                {user.role === 'admin' && data.id === sd && <QuestionForm token={user.token} Update={data} Id={data._id} />}
            </div>
            <br />
        </div>
    );
};

export default React.memo(QuestionCard1);
