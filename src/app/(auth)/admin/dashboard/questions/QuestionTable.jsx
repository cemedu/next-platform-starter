'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import Actions from '@/actions/actions';
import { useRouter } from 'next/navigation';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';


const QuestionTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Question.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id, update_id) => {
        router.push(`${NavLink.admin.questions}?id=update&q_id=${id}&update_id=${update_id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.admin.questions}?id=view&q_id=${id}`);
    }

    return (
        <Container2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td >Info</td>
                            <td >Title</td>
                            <td >Description</td>
                            <td >Answer</td>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((x, i) => (
                            <tr key={x.id}>
                                <td className='min-w-[120px]' >
                                    {x.createdAt.substr(0, 10)} <hr />
                                    id : {x.id} <hr />
                                    {x.category} <hr />
                                    Paid:{x.paid ? 'Yes' : "No"} <hr />
                                </td>
                                <td >{x.title}</td>
                                <td >{x.description}</td>
                                <td >{x.answer}</td>
                                <td>
                                    <div className='flex gap-3 cp'>
                                        <span onClick={() => DeleteHandler(x._id)} className='cp'>{Icons.Delete}</span>
                                        <span onClick={() => EditHandler(x._id, x.id)} className='cp'>{Icons.Edit}</span>
                                        <span onClick={() => DetailsHandler(x._id)} className='cp'>{Icons.Details}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container2 >
    )
}

export default React.memo(QuestionTable);