'use client'
import React from 'react';
import CodeViews from '@/components/views/CodeViews';
import Link from 'next/link';
import NavLink from '@/library/urls';
import AddNewAnser from './AddNewAnser';

const QuestionViews = ({ data }) => {
    const question = { ...data };
    const tags = question?.tags?.split(',') || [];

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-auto w-full">
                <div className='flex justify-end'>
                    <span className='bg-[var(--bg3)] px-3 rounded-md'>#{question.id}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text1)]">{question.title}</h1>
                <br />
                <p>
                    <span className="font-semibold text-[var(--icon)]"> Description : </span>
                    <span>{question.description}</span>
                </p>
                <br />
                <div className='py-2'>
                    <span className="font-semibold text-[var(--icon)]"> Answer : </span>
                    <CodeViews code={question.answer} />
                </div>
                <br />

                <p>
                    <span className="font-semibold text-[var(--icon)]"> Category : </span>
                    {question.category}
                </p>

                {/* <p className="text-gray-200">
                    <span className="font-semibold">Author: </span>
                    {question.author}
                </p> */}

                <p>
                    <span className="font-semibold text-[var(--icon)]"> Created Date : </span>
                    {new Date(question.createdAt).toLocaleDateString()}
                </p>
                <div>
                    <div className="flex flex-wrap mt-2">
                        {tags?.map((tag, index) => (
                            <Link href={`${NavLink?.questions}?query=${tag}`} key={index}>
                                <span className="bg-[var(--bg1)] text-[var(--text1)] text-sm font-semibold mr-2 px-[5px] py-[1px] rounded">
                                    {tag}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <br />
                </div>
                <AddNewAnser data={data} />
            </div>
        </div>
    );
};

export default QuestionViews;
