'use client';
import { InputFields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import NavLinks from '../button/NavLinks';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import toast from 'react-hot-toast';
import Components from '@/library/components';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';
import Actions from '@/actions/actions';

const RegisterForm = ({ update, Id, token }) => {
    const InputField = InputFields.user_register_form;
    const [data, setData] = useState({ ...update });

    const { dispatch, state: { loading, error } } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (!data.name || !data.password || !data.phone || !data.email) {
            dispatch({ type: StoreAction.error, payload: true });
            return;
        }

        try {
            dispatch({ type: StoreAction.error, payload: false });
            dispatch({ type: StoreAction.loading, payload: true });
            const { success, error, data: d1, message } = await Actions.User.Create(data);

            if (success) {
                toast.success(message);
                dispatch({ type: StoreAction.loading, payload: false });
                dispatch({ type: StoreAction.popup, payload: [true, 'login'] });
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
        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
            <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>
                <h1 className="text-2xl font-semibold sm:mb-6 text-center text-[var(--text1)]">Register</h1>
                {error && <Components.Error error={"Fill the all field properly!"} />}

                {InputField.map((x) => (
                    <Inputs
                        key={x.name}
                        name={x.name}
                        value={data[x.name] || ''}
                        id={x.id}
                        placeholder={x.placeholder}
                        type={x.type}
                        onChange={InputHandler}
                        label={x.label}
                    />
                ))}

                <div className='flex justify-end' onClick={() => dispatch({ type: StoreAction.popup, payload: [true, 'login'] })}>
                    <NavLinks href={'/'} value={'Login now'} />
                </div>

                <Button1
                    value={loading ? "Please wait.." : "Register"}
                    type={'submit'}
                    disabled={loading}
                />

            </form>
        </div>
    )
}

export default React.memo(RegisterForm);