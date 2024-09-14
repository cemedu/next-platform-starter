'use client'
import Link from 'next/link';
import React from 'react'
import Container1 from '../container/Container1';
import Icons from '@/library/icons';

const Pagination = ({ count, limit, url, query }) => {
    const totalpage = Math.ceil(count / limit) + 1;

    const newPage = [];
    for (let i = 1; i < totalpage; i++) {
        newPage.push(i);
    }

    function Scroll(left, right) {
        if (left) {
            document.getElementById("pagination").scrollLeft -= 50;
        }
        if (right) {
            document.getElementById("pagination").scrollLeft += 50;
        }
    }
    return (
        <Container1>
            <div className='flex justify-center items-center'>
                <div className='flex items-center max-w-sm p-2 rounded-md gap-4 overflow-y-auto no-scrollbar' id='pagination'>
                    {newPage.map((x, i) => (
                        <Link
                            href={query ? `${url}?page=${x}&query=${query}` : `${url}?page=${x}`}
                            key={i}
                        >
                            <p className='p-1 text-[#fff] flex justify-center items-center w-[30px] h-[30px] bg-[var(--bg3)] rounded-full'>{x}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {newPage.length > 8 && <div className='hidden sm:flex justify-center items-center gap-[100px]'>
                <div
                    onClick={() => Scroll(true, null)}
                    className=' bg-[var(--bg2)] p-2 rounded-full text-[var(--text1)] cp border'
                >
                    {Icons.Left}
                </div>
                <div
                    onClick={() => Scroll(null, true)}
                    className=' bg-[var(--bg2)] p-2 rounded-full text-[var(--text1)] cp border'
                >
                    {Icons.Right}
                </div>
            </div>
            }
        </Container1>
    )
}

export default Pagination;