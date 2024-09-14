'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import Textarea from '../input/Textarea';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';
import Image from 'next/image';

const ContactUsForm = () => {
        const InputField = [Fields.name, Fields.email, Fields.subject, Fields.phone];
        const TextareaField = [Fields.message];

        const [data, setData] = useState({});
        const router = useRouter();

        const { state: { loading }, dispatch } = useContext(Context);

        const InputHandler = (e) => {
                const { name, value } = e.target;
                setData({ ...data, [name]: value });
        }

        const SubmitHandler = async (e) => {
                e.preventDefault();
                const { name, email, phone, message } = data;
                if (!name || !email || !phone || !message) {
                        toast.error('Fill the all field properly!');
                        return;
                }
                try {
                        dispatch({ type: StoreAction.loading, payload: true });
                        const { success, error, message } = await Actions.Message.Create(data);

                        if (success) {
                                toast.success(message);
                                dispatch({ type: StoreAction.loading, payload: false });
                                router.push('/');
                        } else {
                                dispatch({ type: StoreAction.loading, payload: false });
                                toast.error(error || "Something went wrong!");
                        }
                } catch (error) {
                        dispatch({ type: StoreAction.loading, payload: false });
                        toast.error(error.message || "Something went wrong!");
                }
        }

        return (
                <div className='grid md:grid-cols-2 justify-items-center items-center md:gap-[20px]'>
                        <Image src="/imgs/img5.webp" alt="contact us image" width={2000} height={1200} />
                        <div className="flex items-center justify-center h-auto md:min-h-screen sm:p-4 ">
                                <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md border">
                                        <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Get in touch</h1>
                                        <form className="space-y-2 sm:space-y-2" onSubmit={SubmitHandler}>
                                                {InputField.length > 0 && InputField.map((x) => (
                                                        <Inputs
                                                                key={x.name}
                                                                name={x.name}
                                                                id={x.id}
                                                                value={data[x.name] || ''}
                                                                placeholder={x.placeholder}
                                                                type={x.type}
                                                                onChange={InputHandler}
                                                                label={x.label}
                                                        />
                                                ))}

                                                {TextareaField.length > 0 && TextareaField.map((x) => (
                                                        <Textarea
                                                                key={x.name}
                                                                name={x.name}
                                                                id={x.id}
                                                                value={data[x.name] || ''}
                                                                placeholder={x.placeholder}
                                                                type={x.type}
                                                                onChange={InputHandler}
                                                                label={x.label}
                                                        />
                                                ))}

                                                <Button1
                                                        value={loading ? "Please wait.." : "Submit"}
                                                        type={'submit'}
                                                        disabled={loading}
                                                />

                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default React.memo(ContactUsForm);