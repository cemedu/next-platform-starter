import { InputFields } from '@/library/inputs';
import React, { useContext, useState } from 'react'
import Inputs from '../input/Inputs';
import NavLinks from '../button/NavLinks';
import Button1 from '../button/Button1';
import StoreAction from '@/store/store.action';
import { Context } from '@/context/StateProvider';

const ResetPasswordForm = () => {
    const InputField = InputFields.reset_password_form;
    const [data, setData] = useState({});

    const { dispatch } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Reset Password</h1>
            <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>

                {InputField.map((x) => (
                    <Inputs
                        key={x.name}
                        name={x.name}
                        id={x.id}
                        placeholder={x.placeholder}
                        type={x.type}
                        onChange={InputHandler}
                        label={x.label}
                    />
                ))}

                <div className='flex justify-end' onClick={() => dispatch({ type: StoreAction.popup, payload: { popup: true, popup_type: 'login' } })}>
                    <NavLinks href={'#'} value={'Login now'} />
                </div>

                <Button1
                    value={"Register"}
                    type={'submit'}
                />

            </form>
        </div>
    )
}

export default ResetPasswordForm;