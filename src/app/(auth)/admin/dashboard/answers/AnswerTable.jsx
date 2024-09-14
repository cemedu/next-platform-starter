'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';


const BlogTable = ({ rows = [], cols = [], user = {} }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Answer.Delete(user.token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.answers}?id=update&q_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.admin.answers}?id=view&q_id=${id}`);
    }

    return (
        <Container2>
            <table>
                <thead>
                    <tr>
                        {cols.map((x) => (
                            <th key={x}>{x}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((x) => (
                        <tr key={x.id} className={x.paid && 'bg-green-600'}>

                            <td>
                                <span>id:{x.id}</span><hr />
                                <span>Uid:{x.user_id}</span><hr />
                                <span>{x.user_name}</span><hr />
                                <span>Qid:{x.question_id}</span>
                            </td>
                            <td>{x.question}</td>
                            <td>{x.title}</td>
                            <td className='text-left'>{x.answer}</td>
                            <td>{x.createdAt.substring(0, 10)}</td>

                            <td>
                                <div className='flex gap-3 cp'>
                                    <span onClick={() => DeleteHandler(x._id)} className='cp'>{Icons.Delete}</span>
                                    <span onClick={() => EditHandler(x._id)} className='cp'>{Icons.Edit}</span>
                                    <span onClick={() => DetailsHandler(x._id)} className='cp'>{Icons.Details}</span>
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