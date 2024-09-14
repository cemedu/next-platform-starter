'use client';
import React, { useContext, useEffect } from 'react'
import { Context } from './StateProvider';
import StoreAction from './context.action';

const SetState = ({ datas, data }) => {
        const { dispatch } = useContext(Context);
        useEffect(() => {
                if (datas.length > 0) {
                        dispatch({ type: StoreAction.datas, payload: datas });
                }
        }, [datas, dispatch]);

        useEffect(() => {
                if (data?.id) {
                        dispatch({ type: StoreAction.data, payload: data });
                }
        }, [data, dispatch]);

        return null;
}

export default SetState;