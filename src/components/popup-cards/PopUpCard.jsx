'use client';
import React, { useContext } from 'react';
import './style.css';
import Icons from '@/library/icons';
import { Context } from '@/context/StateProvider';
import StoreAction from '@/context/context.action';

const PopUpCard = ({ children, width, popup_type }) => {

    const { state, dispatch } = useContext(Context);

    function DisablePopup() {
        dispatch({ type: StoreAction.popup, payload: [false, null] });
    }

    if (state.popup[0] && state.popup[1] === popup_type) {
        return (
            <div className='popup_main'>
                <div className='popup_content'>
                    <div className='popup_content1' style={{ maxWidth: width || 600 }}>
                        <div className='popup_content2' onClick={DisablePopup}>
                            {Icons.Cross}
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default React.memo(PopUpCard);