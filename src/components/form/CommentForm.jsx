'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Textarea from '../input/Textarea';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';
import './style.css';

const CourseForm = ({ id, access_type }) => {
        const TextareaField = [Fields.description];
        const [data, setData] = useState({ rating: 0, comment: '' });
        const router = useRouter();

        const { state: { loading, user }, dispatch } = useContext(Context);

        const InputHandler = (e) => {
                const { name, value } = e.target;
                setData({ ...data, [name]: value });
        }

        console.log(access_type);
        const SubmitHandler = async (e) => {
                e.preventDefault();
                const { data: userw } = await Actions.User.Details(user.token);
                const f_data = {
                        user: { id: userw.id, name: userw.name, phone: userw.phone },
                        project_id: access_type === 'Project' ? id : null,
                        course_id: access_type === 'Course' ? id : null,
                        rating: data.rating,
                        comment: data.description,
                };

                try {
                        dispatch({ type: StoreAction.loading, payload: true });
                        const { success, error, message } = await Actions.Rating.Create(user.token, f_data);

                        if (success) {
                                toast.success(message);
                                dispatch({ type: StoreAction.loading, payload: false });
                                router.refresh();
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
                <div className="flex items-center justify-center h-auto md:min-h-auto p-2 sm:p-4 ">
                        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
                                <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Write the ideas for me that describes your thoughts.</h1>
                                <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>
                                        <label htmlFor="rating">Rating {data.rating || 0}</label>
                                        <input
                                                onChange={InputHandler}
                                                type="range"
                                                id="rating"
                                                name="rating"
                                                min="1"
                                                max="5"
                                                value={data.rating || 0}
                                        />
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
        )
}

export default React.memo(CourseForm);