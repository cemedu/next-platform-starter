import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const DonetCard = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-2 md:p-6  rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Donate Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex flex-col items-center bg-[#11111179] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl text-center font-semibold mb-4">If you have any idea for make service better please welcome.</h2>

                        <form className="w-full">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text1)]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#1110]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text1)]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#1110]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text1)]">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#1110]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center bg-[#11111179] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

                        <div className="mb-4 flex items-center">
                            <FaPhoneAlt className="text-blue-500 mr-3" />
                            <span className="text-[var(--text1)]">+91 9304446350</span>
                        </div>
                        <div className="mb-4 flex items-center">
                            <FaEnvelope className="text-blue-500 mr-3" />
                            <span className="text-[var(--text1)]">wevdev@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-blue-500 mr-3" />
                            <span className="text-[var(--text1)]">34 Karol bagh, Delhi-10005, IND</span>
                        </div>
                        <br />
                        <div className="flex items-center">
                            <Image width={600} height={600} className='w-[250px] h-auto' src="/webqrcode.png" alt="qr code" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonetCard