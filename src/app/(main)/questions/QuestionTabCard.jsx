'use client'
import React, { useState } from 'react';
import { Categories } from '@/data/data';
import Link from 'next/link';
import NavLink from '@/library/urls';
import Icons from '@/library/icons';

const QuestionTabCard = ({ children }) => {
        const [hide, setHide] = useState(true);
        return (
                <>
                        <div className={hide ? "sidebar relative" : ''}>
                                <div className='fixed z-20 top-1/2 h-[50px] flex items-center justify-center bg-[#111] rounded-md left-0 border cp' onClick={() => setHide(!hide)}>
                                        <span className="gap-2">{hide ? Icons.Left : Icons.Right}</span>
                                </div>
                                {hide ?
                                        <div className='fixed top-0 md:static bg-[var(--bg1)] z-10'>
                                                <br />
                                                <div className="max-h-screen overflow-y-auto no-scrollbar flex flex-col gap-3">
                                                        {Categories.map((x, i) => (
                                                                <Link key={i} href={`${NavLink?.questions}/${x.language}`}>
                                                                        <div className="bg-[var(--bg2)] border-[0.1px] border-[var(--text2)] p-2 rounded-md text-center text-[var(--text1)]">
                                                                                <span className="flex items-center gap-2">{x.Icon}{x.language}</span>
                                                                        </div>
                                                                </Link>
                                                        ))}
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                </div>
                                        </div>
                                        : null
                                }
                                <div className="h-auto md:max-h-screen overflow-auto no-scrollbar">
                                        <br />
                                        {children}
                                </div>
                        </div>
                </>
        )
}

export default QuestionTabCard