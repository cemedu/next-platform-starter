'use client';
import React, { useContext, useState } from 'react';
import CodeViews from '@/components/views/CodeViews';
import EmptyState from '@/components/empty-state/EmptyState';
import Icons from '@/library/icons';
import NewAnswerForm from '@/components/form/NewAnswerForm';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const MoreAnswerCard = ({ data = [], user }) => {
    const { dispatch } = useContext(Context);
    const [s, setS] = useState(null);
    if (data.length < 1) {
        return <EmptyState msg={"No answer found!"} />
    }

    const UpdateHandler = (id) => {
        setS(id)
        dispatch({ type: StoreAction.show, payload: [true, 'more_answer_card'] })
    }

    return (
        <>
            {data.map((x) => (
                <div key={x.id} className="max-w-auto w-full bg-[var(--bg1)] p-2 rounded-md mb-5">
                    {
                        x.user_id === user.id &&

                        <div className='flex justify-end cp'>
                            <span onClick={() => UpdateHandler(x.id)}>{Icons.Edit}</span>
                        </div>
                    }

                    <p className="text-gray-200 mb-4">
                        <span className="font-semibold">Description:</span>
                        <br />
                        {x.title}
                    </p>
                    <div><span className="font-semibold">Answer:</span></div>
                    <CodeViews code={x.answer} />


                    <p className="text-gray-200">
                        <span className="font-semibold">Author: </span>
                        {x?.user_name}
                    </p>

                    <p className="text-gray-200 text-[14px]">
                        <span className="font-semibold">Created At: </span>
                        {new Date(x.createdAt).toLocaleDateString()}
                    </p>

                    {s === x.id && < NewAnswerForm update={x} update_id={x._id} />}
                </div>
            ))}
        </>
    );
};

export default React.memo(MoreAnswerCard);
