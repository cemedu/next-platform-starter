'use client';
import React, { useContext, useState } from 'react'
import Inputs from '../input/Inputs';
import { InputFields } from '@/library/inputs';
import Button1 from '../button/Button1';
import NavLinks from '../button/NavLinks';
import toast from 'react-hot-toast';
import Actions from '@/actions/actions';
import PageReload from '@/helper/PageReload';
import Components from '@/library/components';
import StoreAction from '@/context/context.action';
import { Context } from '@/context/StateProvider';

const LoginForm = () => {
  const InputField = InputFields.user_login_form;
  const [data, setData] = useState({});

  const { state: { loading, error }, dispatch } = useContext(Context);


  const InputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!data.password || !data.email_phone) {
      dispatch({ type: StoreAction.error, payload: true });
      return;
    }

    try {

      dispatch({ type: StoreAction.loading, payload: true });
      const { success, error, message } = await Actions.User.Login(data);

      if (success) {
        toast.success(message)
        dispatch({ type: StoreAction.loading, payload: false });
        dispatch({ type: StoreAction.popup, payload: [false, null] });
        PageReload();
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
      <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Login</h1>
      {error && <Components.Error error={"Fill the all field properly!"} />}
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
          <div onClick={() => dispatch({ type: StoreAction.popup, payload: [true, 'forgot_password'] })}>
            <NavLinks href={'#'} value={'Change password'} />
          </div>
          <div onClick={() => dispatch({ type: StoreAction.popup, payload: [true, 'signup'] })}>
            <NavLinks href={'#'} value={'Register now'} />
          </div>
        </div>

        <Button1
          value={loading ? "Please wait.." : "Login"}
          type={'submit'}
          disabled={loading}
        />

      </form>
    </div>
  )
}

export default React.memo(LoginForm);