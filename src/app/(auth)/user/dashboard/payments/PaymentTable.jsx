
'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import NavLink from '@/library/urls';


const PaymentTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();
    const DownloadHandler = async (id) => {
        router.push(`${NavLink.admin.payments}?id=view&q_id=${id}`);
    }

    const dadta =
    {
        buyer_details: [Object],
        _id: '66d30ad1c54b08bf346ef468',
        id: 'SvpNvv',
        user_id: 'KmuUAs',
        user_name: 'dsdds',
        course_id: 'qurOFZ',
        course_price: '1999',
        term_conditions: 'Accepted',
        is_paid: true,
        razorpay_order_id: 'order_OrVLaI1w7YD8nB',
        razorpay_payment_id: 'pay_OrVLeSG2AN2oIs',
        razorpay_signature: '5e774acb5960ffd399db7ebcf402ca0d72ad57c45230cd6e64f80e777523db62',
        access_only: 'react',
        access_days: 30,
        access_type: 'course',
        createdAt: '2024-08-31T12:21:37.382Z',
        updatedAt: '2024-08-31T12:22:00.147Z',
        __v: 0
    }


    return (
        <Container2>
            <table>
                <thead>
                    <tr>
                        {cols.map((x) => (
                            <th key={x}>{x}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((x) => (
                        <tr key={x.id} className={x.paid && 'bg-green-600'}>

                            <td>{x.id}</td>
                            <td>
                                <span className='flex items-center'>{Icons.Rupees}{x.course_price}</span>
                            </td>

                            <td>
                                <span>{x.user_name}</span>
                                <hr />
                                <span>{x.user_id}</span>
                            </td>

                            <td>
                                <span>Id - {x.course_id}</span>
                                <hr />
                                <span>Price - {x.course_price}</span>
                                <hr />
                                <span>Days - {x.access_days}</span>
                                <hr />
                                <span>Subject - {x.access_only}</span>
                            </td>

                            <td>
                                <span>{x?.razorpay_order_id || null}</span>
                                <hr />
                                <span>{x?.razorpay_payment_id || null}</span>
                                <hr />
                                <span>{x?.razorpay_signature?.substring(0, 20) || null}</span>
                            </td>

                            <td> <span>{x.is_paid ? 'Yes' : "No"}</span></td>
                            <td> <span>{x.createdAt.substring(0, 10)}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container2>
    )
}

export default React.memo(PaymentTable);