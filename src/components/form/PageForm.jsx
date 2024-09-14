'use client';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import Textarea from '../input/Textarea';
import SelectInput from '../input/SelectInput';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const PageForm = ({
    InputField = [],
    TextareaField = [],
    SelectInputField = [],
    PageTitle,
    Fetch = { Type: "", Action: "" },
    Redirect = '/',
    Update = {}
}) => {
    const router = useRouter();
    const [formData, setFormData] = useState({ ...Update });
    const { dispatch, state: { loading } } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const SubmitHandler = async (e) => {
        dispatch({ type: StoreAction.loading, payload: true });
        e.preventDefault();
        const { success, error, message } = await Actions[Fetch.Type][Fetch.Action](formData);
        if (success) {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.success(message);
            router.refresh();
            router.push(Redirect);
        } else {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.error(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-auto md:min-h-screen p-4 ">
            <div className="bg-[var(--th2)] p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">{PageTitle || 'Form'}</h1>
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
    )
}

export default React.memo(PageForm);