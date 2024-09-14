import React from 'react';

const AboutUs = () => {
    return (
        <div className="py-12">
            <div className="grid grid-cols-1">

                <div className="py-12 px-2 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-left">
                        <h1 className="text-3xl font-bold text-gray-100 mb-6">About Us</h1>
                        <p className="text-lg text-gray-200 mb-4">
                            Welcome to <strong>InterviewQuestions.Solutions</strong> – your go-to resource for mastering interview questions and landing your dream job. We are a dedicated team of professionals and career coaches committed to helping you prepare for every aspect of the interview process.
                        </p>
                        <p className="text-lg text-gray-200 mb-4">
                            Our mission is to provide high-quality, comprehensive resources that cover a wide range of topics, from technical questions to behavioral interviews. We understand that interviews can be stressful, and we are here to help you feel confident and well-prepared.
                        </p>
                        <p className="text-lg text-gray-200 mb-4">
                            At InterviewQuestions.Solutions, we believe in the power of practice and preparation. Our platform offers:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-lg text-gray-200">
                            <li>Detailed answers to common interview questions</li>
                            <li>Strategies for handling tough interview scenarios</li>
                            <li>Insights into what interviewers are really looking for</li>
                            <li>Guides and tips for effective interview preparation</li>
                        </ul>
                        <p className="text-lg text-gray-200 mb-4">
                            We are passionate about helping you succeed and are continually updating our content to reflect the latest trends and best practices in job interviews. Thank you for visiting our site, and we wish you the best of luck in your job search!
                        </p>
                        <p className="text-lg text-gray-200">
                            If you have any questions or feedback, feel free to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>. We’re here to help!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
