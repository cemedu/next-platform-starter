
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
            if (data.access_only === 'Full') {
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
                        <th>Info</th>
                        <th>Access Token Id</th>
                        <th>Created Date</th>
                        <th>Expiry Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((x) => (
                        <tr key={x.id}>
                            <td>
                                Id : {x.id} <hr />
                                User Id : {x.user_id} <hr />
                                Type : {x?.access_type} <hr />
                                Payment Id : {x.payment_id} <hr />
                            </td>
                            <td>{x.token}</td>
                            <td>{`${new Date(x.createdAt)}`.substring(0, 25)}</td>
                            <td>{`${new Date(x.expire)}`.substring(0, 25)}</td>
                            <td>
                                <div className='flex gap-3 cp'>
                                    <span onClick={() => DownloadHandler(x.payment_id)} className='cp flex items-center gap-1'>{Icons.Details} View courses</span>
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