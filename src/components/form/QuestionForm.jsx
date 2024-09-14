'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import StoreAction from '@/store/store.action';
import Textarea from '../input/Textarea';
import SelectInput from '../input/SelectInput';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Context } from '@/context/StateProvider';
import { jsonData } from '@/data/data';

const QuestionForm = ({ token, Update, Id }) => {

    const InputField = [Fields.title]
    const TextareaField = [Fields.description, Fields.answer, Fields.tags]
    const SelectInputField = [Fields.category, Fields.paid, Fields.sub_category];


    const router = useRouter();
    const [formData, setFormData] = useState({ ...Update });
    const { state: { loading }, dispatch } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const UpdateDB = async () => {
        const sd = jsonData.length;
        console.log(sd);
        console.log(token);

        // return;

        for (let i = 0; i < sd; i++) {
            const res = await Actions.Question.Create(token, { ...jsonData[i] });
            if (res?.success) {
                // dispatch({ type: StoreAction.loading, payload: false });
                toast.success(res?.message);
                // router.refresh();
                // router.push(NavLink.admin.questions);
            } else {
                dispatch({ type: StoreAction.loading, payload: false });
                toast.error(res.error);
            }
        }
    }

    const SubmitHandler = async (e) => {

        dispatch({ type: StoreAction.loading, payload: true });
        e.preventDefault();
        let res = {};

        if (Id) {
            res = await Actions.Question.Update(token, Id, formData);
        } else {
            res = await Actions.Question.Create(token, formData);
        }

        if (res?.success) {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.success(res?.message);
            router.refresh();
            // router.back();
        } else {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.error(res.error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center h-auto md:min-h-screen md:p-4 ">
                <div className="bg-[var(--bg1)] md:p-8 rounded-lg shadow-lg w-full">
                    <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">{"New Question Form" || 'Form'}</h1>
                    <form className="space-y-6" onSubmit={SubmitHandler}>

                        {InputField.length > 0 && InputField.map((x) => (
                            <Inputs
                                key={x.name}
                                name={x.name}
                                id={x.id}
                                value={formData[x.name] || ''}
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
                                value={formData[x.name] || ''}
                                placeholder={x.placeholder}
                                type={x.type}
                                onChange={InputHandler}
                                label={x.label}
                            />
                        ))}

                        {SelectInputField.length > 0 && SelectInputField.map((x, i) => (
                            <SelectInput
                                key={x.name}
                                name={x.name}
                                id={x.id}
                                value={formData[x.name] || ''}
                                placeholder={x.placeholder}
                                type={x.type}
                                onChange={InputHandler}
                                label={x.label}
                                options={x.options}
                            />
                        ))}

                        <Button1
                            value={loading ? 'Please wait..' : 'Submit'}
                            type={'submit'}
                            disabled={loading}
                        />

                    </form>
                </div>

            </div>

            <button onClick={UpdateDB}>UpdateDB</button>

        </>
    )
}

export default React.memo(QuestionForm);