
'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import NavLink from '@/library/urls';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';


const CourseTable = ({ rows = [], cols = [], token = '' }) => {
    const router = useRouter();
    const DownloadHandler = async (id) => {
        const { success, data, error } = await Actions.Payment.Details(token, id);
        if (success) {
            if (data.access_only === 'full') {
                router.push(`${NavLink.questions}`);
            } else {
                router.push(`${NavLink.questions}/${data.access_only}`);
            }
        } else {
            toast.error(error)
        }
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
                            <td>{x.user_id}</td>
                            <td>{x.access_only} course</td>
                            <td>{x.token}</td>
                            <td>{x.payment_id}</td>
                            <td>{`${new Date(x.createdAt)}`.substring(0, 25)}</td>
                            <td>{`${new Date(x.expire)}`.substring(0, 25)}</td>
                            <td>
                                <div className='flex gap-3 cp'>
                                    <span onClick={() => DownloadHandler(x.payment_id)} className='cp flex items-center gap-1'>{Icons.Details} View</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container2>
    )
}

export default React.memo(CourseTable);