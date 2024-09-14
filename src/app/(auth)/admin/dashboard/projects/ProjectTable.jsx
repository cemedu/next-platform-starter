
'use client';
import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '@/components/container/Container2';
import { useRouter } from 'next/navigation';
import Actions from '@/actions/actions';
import NavLink from '@/library/urls';
import toast from 'react-hot-toast';
import Image from 'next/image';


const ProjectTable = ({ rows = [], cols = [], token }) => {
    const router = useRouter();

    const DeleteHandler = async (id) => {
        const { success, error, message } = await Actions.Project.Delete(token, id);
        if (success) {
            toast.success(message);
            router.refresh();
        } else {
            toast.error(error || 'Something went wrong!');
        }
    }
    const EditHandler = async (id) => {
        router.push(`${NavLink.admin.projects}?id=update&p_id=${id}`);
    }

    const DetailsHandler = async (id) => {
        router.push(`${NavLink.projects}/${id}`);
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
                        <tr key={x?.id}>
                            <td className='w-[100px] h-[100px]'>
                                <Image src={x.image.url} width={100} height={100} alt={x.title} />
                            </td>

                            <td className='min-w-[200px]'>
                                Id : {x.id} <hr />
                                Cate : {x.category} <hr />
                                MRP : {x.mrp} <hr />
                                Offer : {x.offer}% <hr />
                                Price : {x.price} <hr />
                                Date : {x.createdAt.substring(0, 10)}
                            </td>
                            <td>{x.title}</td>
                            <td>{x.description}</td>
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

export default React.memo(ProjectTable);