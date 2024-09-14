'use client';
import React, { useContext, useState } from 'react'
import Inputs from '../input/Inputs';
import { InputFields } from '@/library/inputs';
import Button1 from '../button/Button1';
import NavLinks from '../button/NavLinks';
import toast from 'react-hot-toast';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const ForgotPasswordForm = () => {
  const InputField = InputFields.forgot_password_form;
  const [data, setData] = useState({});

  const { dispatch } = useContext(Context);

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    toast.success('success')
  }

  return (
    <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
      <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Forgot Password</h1>
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

        <div className='flex justify-between'>
          <div onClick={() => dispatch({ type: StoreAction.popup, payload: [true, 'login'] })}>
            <NavLinks href={'#'} value={'Login now'} />
          </div>
          <div onClick={() => dispatch({ type: StoreAction.popup, payload: [true, 'signup'] })}>
            <NavLinks href={'#'} value={'Register now'} />
          </div>
        </div>

        <Button1
          value={"Login"}
          type={'submit'}
        />

      </form>
    </div>
  )
}

export default React.memo(ForgotPasswordForm);