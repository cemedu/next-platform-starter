'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import toast from 'react-hot-toast';
import Components from '@/library/components';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';
import Actions from '@/actions/actions';
import PageReload from '@/helper/PageReload';

const UserUpdateForm = ({ update, Id, token }) => {
    const InputField = [Fields.name, Fields.email, Fields.phone];
    const [data, setData] = useState({ ...update });

    const { dispatch, state: { loading, error } } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (!data.name || !data.phone || !data.email) {
            dispatch({ type: StoreAction.error, payload: true });
            return;
        }

        try {
            dispatch({ type: StoreAction.error, payload: false });
            dispatch({ type: StoreAction.loading, payload: true });
            const { success, error, data: d1, message } = await Actions.User.Update(token, Id, data);

            if (success) {
                toast.success(message);
                dispatch({ type: StoreAction.loading, payload: false });
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
        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md border">
            <form className="space-y-2" onSubmit={SubmitHandler}>
                <h1 className="text-2xl font-semibold sm:mb-6 text-center text-[var(--text1)]">Update</h1>
                {error && <Components.Error error={"Fill the all field properly!"} />}

                <Inputs
                    label={'User Id'}
                    value={data?.id}
                    disabled={true}
                />
                <div className='grid sm:grid-cols-2 gap-3'>
                    <Inputs
                        label={'User role'}
                        value={data?.role}
                        disabled={true}
                    />
                    <Inputs
                        label={'Is verified'}
                        value={!data?.verified ? 'Not verified' : 'Verified'}
                        disabled={true}
                    />
                    <Inputs
                        label={'Joining Date'}
                        value={data?.createdAt?.substring(0, 10)}
                        disabled={true}
                    />
                    <Inputs
                        label={'Last Updated'}
                        value={data?.updatedAt?.substring(0, 10)}
                        disabled={true}
                    />
                </div>
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

                <br />
                <Button1
                    value={loading ? "Please wait.." : "Update"}
                    type={'submit'}
                    disabled={loading}
                />

            </form>
        </div>
    )
}

export default React.memo(UserUpdateForm);