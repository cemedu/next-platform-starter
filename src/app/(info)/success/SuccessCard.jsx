import Icons from '@/library/icons';
import React from 'react';

const SuccessCard = ({ msg, msg2 }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
            <div className="text-6xl text-green-500 mb-4">
                {Icons.Verified}
            </div>
            <h1 className="text-3xl text-center font-bold text-gray-200 mb-2"> {msg || "Order placed successfully!"}</h1>
            <p className="text-lg text-gray-200">{msg2 || "Thank you, for purchasing our product, in case of any problem arrive in the source code / product please contact us zoyweb@gmail.com."} </p>
        </div>
    );
};

export default SuccessCard;
