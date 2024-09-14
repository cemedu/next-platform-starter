import React from 'react'
import LoginForm from '@/components/form/LoginForm';

export const metadata = {
    title: 'User Login | Interview Questions and Solutions',
    keywords: 'interviews, questions, nodejs, reactjs, programming',
    description: 'Prepare for your interview with our top-notch resources and guides',
    author: 'Srisir',
};

const login = () => {
    return (
        <>
            <div className="flex items-center justify-center h-auto md:min-h-screen p-4 ">
                <LoginForm />
            </div>
        </>
    )
}

export default login