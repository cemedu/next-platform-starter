'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useEffect, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import Link from 'next/link';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const PaymentForm = ({ user }) => {
    const InputField = [Fields.name, Fields.email, Fields.phone, Fields.address];

    const [data, setData] = useState({});
    const router = useRouter();

    const { state, dispatch } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.phone || !data.address) {
            toast.error('Please fill the all field properly!');
            return;
        }
        if (!data.accept) {
            toast.error('Please accept terms and conditions!');
            return
        };

        const payment_details = {

            user_id: user.id,
            user_name: user.name,
            buyer_details: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
            },
            course_id: state.data.id,
            course_price: state.data.price,
            term_conditions: data.accept ? 'Accepted' : 'Not Accepted',

            access_only: state.data.access_only, // full | javascript | node js
            access_days: state.data.access_days, // 30 days
            access_type: state.data.access_type, // project | course

            razorpay_order_id: null,
            razorpay_payment_id: null,
            razorpay_signature: null,
            amount: state.data.price,
            currency: "INR"
        }

        try {
            dispatch({ type: StoreAction.loading, payload: true });
            const { success, error, data: { response, payment: res_data }, message } = await Actions.Payment.Create(user.token, payment_details);

            if (success) {
                toast.success(message);
                const options = {
                    key: process.env.RAZORPAY_API_KEY,
                    amount: res_data.amount,
                    currency: res_data.currency,
                    name: "Srisir",
                    description: "Test Transaction",
                    image: "",
                    order_id: res_data.id,
                    notes: { address: "Fiee complex, A41, okhla-2 near c-lal-cahuk bus stand " },
                    theme: { color: "#3399cc" },

                    handler: async function (darderf) {
                        const verifyData = {
                            ...darderf,
                            id: response?.id,
                            user_id: user.id,
                            expire_days: state.data.access_days,
                            access_type: state.data.access_type
                        };
                        const { success, error, message } = await Actions.Payment.Verify(user.token, verifyData);
                        if (success) {
                            toast.success(message);
                            router.push(NavLink.success);
                            dispatch({ type: StoreAction.loading, payload: false });
                        } else {
                            dispatch({ type: StoreAction.loading, payload: false });
                            toast.error(error);
                            router.push(NavLink.failed);
                        }
                    },
                };

                const razorpay = new window.Razorpay(options);
                razorpay.on('payment.failed', (err) => {
                    console.log(err);
                });
                await razorpay.open();

            } else {
                dispatch({ type: StoreAction.loading, payload: false });
                toast.error(error || "Something went wrong!");
            }
        } catch (error) {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.error(error.message || "Something went wrong!");
        }
    }

    useEffect(() => {
        if (!state.data.price) {
            router.back();
        }
    }, [state.data.price, router]);

    return (
        <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md border">
            <h2 className='text-2xl font-bold text-[var(--icon)]'>Contact Details</h2>
            <br />
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
                <div className='flex justify-start gap-3'>
                    <div
                        onClick={() => setData({ ...data, accept: !data?.accept })}
                        className={`${data.accept ? 'bg-[var(--icon)]' : 'bg-[var(--bg1)]'} border w-[27px] h-[23px] rounded-full  justify-center flex items-center cp`}
                    >
                        {
                            data.accept && <svg className="flex-shrink-0 font-bold w-[15px] h-[15px] text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        }
                    </div>
                    <div>
                        <span>{"Please accept the"}</span> <Link target='_blank' className='text-green-500' href={NavLink?.terms_conditions}>term conditons</Link> <span>and</span> <Link target='_blank' className='text-green-500' href={NavLink?.privacy_policy}>privacy policy</Link>
                    </div>
                </div>

                <Button1
                    value={state.loading ? "Please wait.." : "Pay now"}
                    type={'submit'}
                    disabled={state.loading}
                />

            </form>
        </div>
    )
}

export default React.memo(PaymentForm);