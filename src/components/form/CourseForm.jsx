'use client';
import { Fields } from '@/library/inputs';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Inputs from '../input/Inputs';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import Textarea from '../input/Textarea';
import SelectInput from '../input/SelectInput';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const CourseForm = ({ Update, Id, token }) => {
    const InputField = [Fields.title, Fields.mrp, Fields.offer]
    const TextareaField = [Fields.description, Fields.points];
    const SelectInputField = [Fields.category, Fields.sub_category, Fields.access_days, Fields.access_only, Fields.access_type]

    const [data, setData] = useState({ ...Update });
    const router = useRouter();

    const { state: { loading }, dispatch } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        const { title, mrp, description, image, category, sub_category, access_days, access_only, access_type, points } = data;

        if (!title || !mrp || !description || !image || !category || !sub_category || !access_days || !access_only || !access_type || !points) {
            toast.error('Please fill the all field properly!');
            return;
        }

        try {
            dispatch({ type: StoreAction.loading, payload: true });
            let res = {};
            if (Id) {
                res = await Actions.Course.Update(token, Id, data);
            } else {
                res = await Actions.Course.Create(token, data);
            }
            if (res?.success) {
                dispatch({ type: StoreAction.loading, payload: false });
                toast.success(res?.message);
                router.push(NavLink.admin.courses);
            } else {
                dispatch({ type: StoreAction.loading, payload: false });
                toast.error(res.error);
            }
        } catch (error) {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.error(error.message || "Something went wrong!");
        }
    }

    function ImgToBase64(e) {
        const reader = new FileReader();
        reader.onerror = err => console.log(err);
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setData({ ...data, image: reader.result })
        };
    }

    return (
        <div className="flex items-center justify-center h-auto md:min-h-screen p-4 ">
            <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-xl border">
                <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">Course Form</h1>
                <br />
                <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>

                    <div className='grid sm:grid-cols-2 gap-2'>
                        {InputField.length > 0 && InputField.map((x) => (
                            <Inputs
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

                        {SelectInputField.length > 0 && SelectInputField.map((x, i) => (
                            <SelectInput
                                key={x.name}
                                name={x.name}
                                id={x.id}
                                value={data[x.name] || ''}
                                placeholder={x.placeholder}
                                type={x.type}
                                onChange={InputHandler}
                                label={x.label}
                                options={x.options}
                            />
                        ))}
                    </div>

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

                    <input
                        type="file"
                        accept='*'
                        onChange={ImgToBase64}
                    />

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