"use client";
import AddNewAnswerForm from "@/components/form/NewAnswerForm";
import React, { useContext, useEffect, useState } from "react";
import MoreAnswerCard from "./MoreAswerCard";
import Actions from "@/actions/actions";
import toast from "react-hot-toast";
import { Context } from "@/context/StateProvider";
import StoreAction from "@/context/context.action";

const AddNewAnser = ({ data }) => {
  const { dispatch, state: { show, loading, user } } = useContext(Context);

  const [answres, setAnswres] = useState([]);

  const MoreAnswers = async (id) => {
    if (user?.id) {
      dispatch({ type: StoreAction.loading, payload: true });
      const query = `page=${1}&id=${id}`;
      const { data: answers, success, error } = await Actions.Answer.Filter(user.token, query);

      if (success) {
        dispatch({ type: StoreAction.loading, payload: false });
        dispatch({ type: StoreAction.show, payload: [true, "more_answer_card"] });
        setAnswres(answers);
      } else {
        dispatch({ type: StoreAction.loading, payload: false });
        setAnswres([]);
        toast.error(error);
      }
    } else {
      toast.error("Please login to access this resource!")
    }
  };

  const WriteAnswerHandler = () => {
    if (user?.id) {
      dispatch({ type: StoreAction.show, payload: [true, "new_answer_form"] });
    } else {
      toast.error("Please login to access this resource!");
    }
  };

  useEffect(() => {
    dispatch({ type: StoreAction.show, payload: [false, null] });
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-start gap-3 max-w-200 cp">
        <span
          className="px-2 rounded-md bg-[var(--icon)] border text-[#222]"
          value={"More answer"}
          onClick={() => MoreAnswers(data.id)}
        >
          {loading ? "Please wait.." : "Show more answers"}
        </span>
        <span
          className="px-2 rounded-md bg-[var(--icon)] border text-[#222]"
          value={"New answer"} onClick={WriteAnswerHandler}
        >
          Write your answer
        </span>

        {show[0] && (
          <span
            className="px-2 rounded-md bg-[var(--icon)] border text-[#222]"
            value={"New answer"}
            onClick={() => dispatch({ type: StoreAction.show, payload: [false, null] })}
          >
            Hide
          </span>
        )}
      </div>
      <br />
      {show[0] && show[1] === "new_answer_form" && (
        <AddNewAnswerForm data={data} />
      )}
      {show[0] && show[1] === "more_answer_card" && (
        <MoreAnswerCard data={answres} user={user} />
      )}
    </div>
  );
};

export default AddNewAnser;
