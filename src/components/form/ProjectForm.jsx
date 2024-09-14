'use client';
import React, { useContext, useState } from 'react';
import Button1 from '../button/Button1';
import Textarea from '../input/Textarea';
import Actions from '@/actions/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Fields } from '@/library/inputs';
import SelectInput from '../input/SelectInput';
import Inputs from '../input/Inputs';
import NavLink from '@/library/urls';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const ProjectForm = ({ token, Update, Id }) => {

    const InputField = [Fields.title, Fields.mrp, Fields.offer, Fields.file_url];
    const TextareaField = [Fields.description, Fields.points];
    const SelectField = [Fields.project_category, Fields.access_days, Fields.access_only, Fields.access_type];

    const router = useRouter();
    const [formData, setFormData] = useState({ ...Update });

    const { state: { loading }, dispatch } = useContext(Context);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function ImgToBase64(e) {
        const reader = new FileReader();
        reader.onerror = err => console.log(err);
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result })
        };
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        dispatch({ type: StoreAction.loading, payload: true });


        let res = {};
        if (Id) {
            res = await Actions.Project.Update(token, Id, formData);
        } else {
            res = await Actions.Project.Create(token, formData);
        }

        if (res?.success) {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.success(res?.message);
            router.push(NavLink.admin.projects);
            router.refresh();
        } else {
            dispatch({ type: StoreAction.loading, payload: false });
            toast.error(res.error);
        }
    }

    return (
        <div className="flex items-center justify-center h-auto p-4 ">
            <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-xl border">
                <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">{"New project form" || 'Form'}</h1>
                <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>
                    <div className='grid sm:grid-cols-2 gap-2'>
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

                        {SelectField.length > 0 && SelectField.map((x, i) => (
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
                    </div>

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
                    <input
                        type="file"
                        accept='*'
                        onChange={ImgToBase64}
                    />

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

export default React.memo(ProjectForm);