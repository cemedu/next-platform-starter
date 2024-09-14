import Link from 'next/link';
import React from 'react';

const DashboardCard = ({ data = [] }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {data.map((x, i) => (
                <div key={i} className='p-3 bg-[var(--bg1)] rounded-md'>
                    <div key={i} className='p-3 bg-[var(--bg1)] border rounded-md'>
                        <Link href={x?.url || '#'}>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-3xl'>{x.icon}</span>
                                <span className='text-2xl font-bold text=[var(--text1)]'>{x.title}</span>
                                <span className='text=[var(--text1)]'>{x.count || 0}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default React.memo(DashboardCard);