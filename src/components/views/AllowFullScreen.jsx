"use client";
import React, { useContext } from 'react';
import Button1 from '../button/Button1';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const AllowFullScreen = () => {
        const { dispatch } = useContext(Context);
        function openFullscreen(elem) {
                dispatch({ type: StoreAction.popup, payload: [false, null] });
                dispatch({ type: StoreAction.reading_mode, payload: true });

                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                } else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                        elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                        elem.webkitRequestFullscreen();
                }
        }
        return (
                <div onClick={(e) => openFullscreen(e)}>
                        <Button1 value={'Allow reading mode'} />
                </div>
        )
}

export default AllowFullScreen;