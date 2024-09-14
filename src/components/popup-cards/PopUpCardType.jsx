import React from 'react';
import LoginForm from '../form/LoginForm';
import RegisterForm from '../form/RegisterForm';
import PopUpCard from './PopUpCard';
import ResetPasswordForm from '../form/ResetPasswordForm';
import ForgotPasswordForm from '../form/ForgotPasswordForm';
import AllowFullScreen from '../views/AllowFullScreen';


const PopUpCardType = () => {
    return (
        <>
            <PopUpCard width='450px' popup_type={'signup'}>
                <RegisterForm />
            </PopUpCard>

            <PopUpCard width='380px' popup_type={'login'}>
                <LoginForm />
            </PopUpCard>

            <PopUpCard width='380px' popup_type={'reset_password'}>
                <br />
                <ResetPasswordForm />
            </PopUpCard>

            <PopUpCard width='380px' popup_type={'forgot_password'}>
                <ForgotPasswordForm />
            </PopUpCard>

            <PopUpCard width='300px' popup_type={'reading_mode'}>
                <AllowFullScreen />
            </PopUpCard>

            <PopUpCard h1={'Shipping address'} width='650px' popup_type={'shipping'}>
                <br />
                {/* <ShippingForm /> */}
            </PopUpCard>

            <PopUpCard h1={'Payment'} width='400px' popup_type={'payment'}>
                <br />
                {/* <PaymentForm /> */}
            </PopUpCard>

        </>
    )
}
export default React.memo(PopUpCardType);