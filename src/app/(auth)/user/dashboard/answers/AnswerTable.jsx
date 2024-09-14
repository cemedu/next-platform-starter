'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import NavLink from '@/library/urls';


const BlogTable = ({ rows = [] }) => {
    const router = useRouter();

    const DetailsHandler = async (id, category) => {
        router.push(`${NavLink.questions}/${category}/${id}`);
    }

    return (
        <Container2>
            <table>
                <thead>
                    <tr>
                        <th>InFo</th>
                        <th>Title</th>
                        <th>Tags</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((x) => (
                        <tr key={x.id}>
                            <td>
                                id:  {x.id} <hr />
                                Qid: {x.question_id}
                                cat : {x.category}
                            </td>
                            <td >{x.title.substring(0, 20)}...</td>
                            <td >{x.tags.substring(0, 20)}...</td>
                            <td >{x.answer.substring(0, 20)}...</td>
                            <td>
                                <div className='flex gap-3 cp'>
                                    <span onClick={() => DetailsHandler(x.question_id, x?.category)} className='cp flex items-center gap-2'>{Icons.Details} View answer</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container2>
    )
}

export default React.memo(BlogTable);