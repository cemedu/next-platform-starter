import React from 'react';
import './style.css';
import CodeViews from './CodeViews';

const QuestionViews = ({ data }) => {
    const question = { ...data };

    const tags = question?.tags?.split(',') || [];

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-auto w-full rounded-lg shadow-md">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{question.title}</h1>
                <hr />
                <br />
                <p className="text-gray-200 mb-4">
                    <span className="font-semibold">Description:</span>
                    <br />
                    {question.description}
                </p>
                <br />
                <div><span className="font-semibold">Answer:</span></div>
                <br />
                <CodeViews code={question.answer} />
                <br />

                <p className="text-gray-200">
                    <span className="font-semibold">Category: </span>
                    {question.category}
                </p>
                <p className="text-gray-200">
                    <span className="font-semibold">Author: </span>
                    {question.author}
                </p>
                <p className="text-gray-200">
                    <span className="font-semibold">Created At: </span>
                    {new Date(question.createdAt).toLocaleDateString()}
                </p>
                <div className="center">
                    <div className="flex flex-wrap mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default QuestionViews;
