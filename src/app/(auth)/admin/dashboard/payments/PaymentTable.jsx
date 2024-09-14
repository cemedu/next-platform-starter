
'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';


const PaymentTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Payment.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.payments}?id=update&q_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.admin.payments}?id=view&q_id=${id}`);
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
                        <tr key={x.id} className={!x.is_paid && 'bg-red-900'}>

                            <td>
                                Id :  {x.id} <hr />
                                IsPaid : {x.is_paid ? "Yes" : "No"} <hr />
                                UName : {x.user_name} <hr />
                                UId :  {x.user_id} <hr />
                                {x.createdAt.substring(0, 10)}
                            </td>
                            <td>
                                <span>{x?.buyer_details?.name}</span><hr />
                                <span>{x?.buyer_details?.email}</span><hr />
                                <span>{x?.buyer_details?.phone}</span><hr />
                                <span>{x?.buyer_details?.address}</span>
                            </td>

                            <td>
                                <span>id : {x.course_id}</span><hr />
                                <span>Price : {x.course_price}</span><hr />
                                <span>Type : {x.access_type}</span><hr />
                                <span>Days : {x.access_days}</span><hr />
                                <span>Course : {x.access_only}</span>
                            </td>

                            <td>
                                <span>{x?.razorpay_order_id || null}</span>
                                <hr />
                                <span>{x?.razorpay_payment_id || null}</span>
                                <hr />
                                <span>{x?.razorpay_signature?.substring(0, 20) || null}</span>
                            </td>

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

export default React.memo(PaymentTable);