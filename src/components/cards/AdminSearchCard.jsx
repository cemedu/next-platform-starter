'use client';
import { Fields } from '@/library/inputs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Inputs from '../input/Inputs';
import SelectInput from '../input/SelectInput';
import Icons from '@/library/icons';

const AdminSearchCard = ({ url, cols }) => {
        const InputField = [Fields.name];
        const SelectInputField = [Fields.course]
        const [data, setData] = useState({});
        const router = useRouter();
        async function SubmitHandler(e) {
                e.preventDefault();
                let xx = `${data.cols}=${data.name || ''}&category=${data.course || ''}&paid=${true}`;
                router.push(`${url}?${xx}`);
        }
        const InputHandler = (e) => {
                const { name, value } = e.target;
                setData({ ...data, [name]: value });
        }
        return (
                <>

                        <form onSubmit={SubmitHandler} className='flex justify-center items-center gap-3'>
                                {InputField.length > 0 && InputField.map((x) => (
                                        <Inputs
                                                key={x.name}
                                                name={x.name}
                                                id={x.id}
                                                value={data[x.name] || ''}
                                                placeholder={x.placeholder}
                                                type={x.type}
                                                onChange={InputHandler}
                                        />
                                ))}

                                <SelectInput
                                        name={'cols'}
                                        onChange={InputHandler}
                                        options={cols}
                                />

                                {SelectInputField.length > 0 && SelectInputField.map((x, i) => (
                                        <SelectInput
                                                key={x.name}
                                                name={x.name}
                                                id={x.id}
                                                value={data[x.name] || ''}
                                                placeholder={x.placeholder}
                                                type={x.type}
                                                onChange={InputHandler}
                                                options={x.options}
                                        />
                                ))}
                                <button type='submit' className='text-xl p-2 border rounded-md mt-2'>{Icons.Search}</button>
                        </form>

                </>
        )
}

export default AdminSearchCard;