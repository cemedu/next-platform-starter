"use client";
import { Fields } from "@/library/inputs";
import React, { useContext, useState } from "react";
import Button1 from "../button/Button1";
import StoreAction from "@/store/store.action";
import Textarea from "../input/Textarea";
import Actions from "@/actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Context } from "@/context/StateProvider";

const NewAnswerForm = ({ data, update, update_id }) => {
  const TextareaField = [Fields.title, Fields.answer, Fields.tags];

  const router = useRouter();
  const [formData, setFormData] = useState({ ...update });
  const { state: { loading, user }, dispatch } = useContext(Context);

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (formData.answer?.length < 100) {
      toast.error("Answer should be more than 100 character!");
      return;
    }
    dispatch({ type: StoreAction.loading, payload: true });

    const submited_data = {
      user_id: user?.id || null,
      user_name: user?.name || null,
      question_id: data?.id || null,
      title: formData?.title || null,
      tags: formData?.tags || null,
      answer: formData?.answer || null,
      question: data?.title || null,
      category: data?.category || null,
    };

    let res = {};
    if (update_id) {
      res = await Actions.Answer.Update(user.token, update_id, formData);
    } else {
      res = await Actions.Answer.Create(user.token, submited_data);
    }

    if (res?.success) {
      dispatch({ type: StoreAction.loading, payload: false });
      dispatch({ type: StoreAction.show, payload: [false, null] });
      toast.success(res?.message);
      router.refresh();
    } else {
      dispatch({ type: StoreAction.loading, payload: false });
      toast.error(res.error);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto p-4 ">
      <div className="bg-[var(--bg1)] p-2 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-[var(--text1)]">
          {"New answer form" || "Form"}
        </h1>
        <form className="space-y-2 sm:space-y-4" onSubmit={SubmitHandler}>
          {TextareaField.length > 0 &&
            TextareaField.map((x) => (
              <Textarea
                key={x.name}
                name={x.name}
                id={x.id}
                value={formData[x.name] || ""}
                placeholder={x.placeholder}
                type={x.type}
                onChange={InputHandler}
                label={x.label}
              />
            ))}

          <Button1
            value={loading ? "Please wait.." : "Submit"}
            type={"submit"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default React.memo(NewAnswerForm);
