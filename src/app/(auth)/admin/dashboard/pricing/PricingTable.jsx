'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';

const PricingTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Pricing.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.pricing}?id=update&p_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.pricing}/${id}`);
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
                            <td className='min-w-[130px]'>
                                id : {x.id} <hr />
                                Price : {x.price} <hr />
                                Offer :  {x.offer}% <hr />
                                Only :  {x.access_only} <hr />
                                Type : {x.access_type}<hr />
                                {x.access_days} Days
                            </td>
                            <td>{x.title}</td>
                            <td>{x.description}</td>
                            <td>{x.points} </td>
                            <td>{x.createdAt.substring(0, 10)}</td>

                            <td>
                                <div className='flex gap-3 cp'>
                                    <span onClick={() => DeleteHandler(x._id)} className='cp'>{Icons.Delete}</span>
                                    <span onClick={() => EditHandler(x._id)} className='cp'>{Icons.Edit}</span>
                                    <span onClick={() => DetailsHandler(x.id)} className='cp'>{Icons.Details}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container2>
    )
}

export default React.memo(PricingTable);