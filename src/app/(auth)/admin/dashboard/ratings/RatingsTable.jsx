'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';


const RatingsTable = ({ token, rows = [], cols = [] }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Rating.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.comments}?id=update&q_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.admin.comments}?id=view&q_id=${id}`);
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
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.user?.id}</td>
                            <td>{x.user?.name}</td>
                            <td>{x.user?.phone}</td>
                            <td>{x.project_id}</td>
                            <td>{x.course_id}</td>
                            <td>{x.rating}</td>
                            <td>{x.comment}</td>
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

export default React.memo(RatingsTable);