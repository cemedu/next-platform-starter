import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const EmptyState = ({ msg, msg2 }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
            <FaExclamationTriangle className="text-6xl text-red-400 mb-4" />
            <h1 className="text-3xl text-center font-bold text-[var(--icon)] mb-2"> {msg || "No Data Found!"}</h1>
            <p className="text-lg text-[var(--text1)]">{msg2 || "Sorry, we couldn't find any data!"} </p>
        </div>
    );
};

export default EmptyState;
