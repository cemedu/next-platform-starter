'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';
import Button1 from '@/components/button/Button1';


const SecurityTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Security.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }

    const DeleteAllHandler = async (id) => {
        const { success, error, message } = await Actions.Security.DeleteAll(token);

        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.security}?id=update&q_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.admin.security}?id=view&q_id=${id}`);
    }

    return (
        <Container2>
            <div className='flex justify-end'>
                <div className='min-w-[200px]'>
                    <Button1 value={'Delete All'} onClick={DeleteAllHandler} />
                </div>
            </div>
            <br />
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
                    {rows.map((x, i) => (
                        <tr key={x._id} className={x.paid && 'bg-green-600'}>

                            <td className=''>{x.ip}</td>
                            <td>
                                {x.createdAt.substring(0, 10)}
                            </td>
                            <td>{x.api}</td>
                            <td>{x.params}</td>
                            <td>{x.body}</td>

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

export default React.memo(SecurityTable);