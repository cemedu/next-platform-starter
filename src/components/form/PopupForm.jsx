'use client';
import React, { useContext, useState } from 'react';
import NavLinks from '../button/NavLinks';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import Textarea from '../input/Textarea';
import SelectInput from '../input/SelectInput';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const PopUpForm = ({
    InputField = [],
    TextareaField = [],
    SelectInputField = [],
    SelectInputOptions = [],
    dispatch_type,
    payload,
    btn_value
}) => {

    const [data, setData] = useState({});
    const { state: { loading }, dispatch } = useContext(Context);
    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = (e) => {
        dispatch({ type: StoreAction.loading, payload: true });
        e.preventDefault();
        setTimeout(() => { console.log(data); }, 5000);
        dispatch({ type: StoreAction.loading, payload: false });
    }

    return (
        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Register</h1>
            <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>

                {InputField.length > 0 && InputField.map((x) => (
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

                {TextareaField.length > 0 && TextareaField.map((x) => (
                    <Textarea
                        key={x.name}
                        name={x.name}
                        id={x.id}
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
                        placeholder={x.placeholder}
                        type={x.type}
                        onChange={InputHandler}
                        label={x.label}
                        options={SelectInputOptions[i]}
                    />
                ))}

                <div className='flex justify-end' onClick={() => dispatch({ type: dispatch_type, payload: payload })}>
                    <NavLinks href={'/'} value={btn_value} />
                </div>

                <Button1
                    value={loading ? 'wait..' : 'submit'}
                    type={'submit'}
                    disabled={loading}
                />

            </form>
        </div>
    )
}

export default React.memo(PopUpForm);