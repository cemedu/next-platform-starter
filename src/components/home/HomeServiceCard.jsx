import { Categories } from '@/data/data';
import React from 'react'
import Container1 from '../container/Container1';
import Link from 'next/link';
import NavLink from '@/library/urls';

const HomeServiceCard = () => {
        return (
                <div className='bgi1 min-h-xl'>
                        <Container1>
                                <br />
                                <br />
                                <h1 className='text-3xl font-bold text-[var(--icon)]'>Our Categories</h1>
                                <br />
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2 sm:gap-3'>
                                        {Categories.map((x, i) => (
                                                <Link href={`${NavLink.questions}/${x.language}`} key={i} className='bg-[var(--bg2)] p-2 sm:py-3 rounded-md shadow-md text-center border flex items-center gap-4 hover:-mt-1'>
                                                        <span className='text-2xl sm:text-4xl text-[var(--icon)] font-bold'>{x.Icon}</span>
                                                        <span className='font-bold text-[var(--text1)]'>{x.language}</span>
                                                </Link>
                                        ))}
                                </div>
                                <br />
                                <br />
                        </Container1>
                </div>
        )
}

export default HomeServiceCard;