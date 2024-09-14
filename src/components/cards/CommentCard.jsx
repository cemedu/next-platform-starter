import Icons from '@/library/icons';
import React from 'react'

const CommentCard = ({ data = {} }) => {

        let count = data.count || 0
        const ratings = data.data || []

        // const rating = data.count / 5
        const rate = [];
        for (let i = 0; data.count > i; i++) {
                rate.push(ratings[i].rating);
        };

        const sum1 = rate.reduce((x, y) => x + y, 0) / count
        const sum = (Math.round(sum1 * 100) / 100).toFixed(2);

        return (
                <>

                        <div>
                                <span className='flex items-center gap-3 text-[var(--text1)] text-2xl py-3'>
                                        {Icons.Star}{sum} <small>({count} reviews)</small>
                                </span>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-3'>
                                {data?.data?.map((x, i) => (
                                        <div key={i} className='flex flex-col border bg-[var(--bg1)] p-2 rounded-md'>
                                                <div className='flex justify-between items-center'>
                                                        <span className='flex items-center gap-1 text-xl text-[var(--text1)]'>{Icons.User}{x.user.name}</span>
                                                        <span className='flex items-center gap-1 text-[var(--text1)]'>{Icons.Star}{x.rating}</span>
                                                </div>
                                                <span>
                                                        {x.comment}</span>
                                        </div>
                                ))}
                        </div>

                </>
        )
}

export default CommentCard;