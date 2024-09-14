'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Banner2.css';
import Container1 from '../container/Container1';
import SearchBarCard from '../cards/SearchBarCard';
import HomeCard2 from '../home/HomeCard2';

const slides = [
    {
        url: '/banners/banner5.webp',
        title: 'Slide 5'
    },
    {
        url: '/banners/banner1.webp',
        title: 'Slide 1'
    },
    {
        url: '/banners/banner2.webp',
        title: 'Slide 2'
    },
    {
        url: '/banners/banner3.webp',
        title: 'Slide 3'
    },
    {
        url: '/banners/banner4.webp',
        title: 'Slide 4'
    },

];

const Banner2 = () => {
    const [currentSlide, setCurrentSlide] = useState(4);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };


    return (
        <div className="banner h-screen flex items-center justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                ))}
            </div>
            <div className="z-10 text-center text-[var(--text1)] px-6 py-4 bg-[#9990] bg-opacity-50 rounded-md">
                <Container1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff]">Welcome to <span className='text-[var(--icon)]'>IQ-Solutions</span></h2>
                    <p className='text-[17px] font-serif text-[#fff]'>
                        To secure your dream job in development, prepare extensively with over <span className='text-[var(--icon)] font-bold'>10,000+</span> interview questions covering popular technologies like JavaScript, React, Node.js, Tailwind CSS, and more. Develop a deep understanding of core concepts, frameworks, and tools. Focus on practical coding challenges, system design, and problem-solving skills. in diffrent words
                    </p>
                    <p className="text-sm md:text-lg mb-4">Start your journey to excellence begins here..</p>
                    <br />

                    <SearchBarCard />

                    <div className="hidden md:flex space-x-2">
                        <button
                            onClick={prevSlide} className="p-2 absolute top-1/2 left-0 rounded-md"
                        >
                            <FaChevronLeft />
                        </button>
                        <button onClick={nextSlide} className="p-2 absolute top-1/2 right-0  rounded-md">
                            <FaChevronRight />
                        </button>
                    </div>
                </Container1>
            </div >
        </div >
    );
};

export default React.memo(Banner2);
