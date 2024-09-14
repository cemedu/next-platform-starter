import React from 'react';

const FHGHG = [
    { a: '2000+', b: 'Questions' },
    { a: '200+', b: 'Technolgy' },
    { a: '50+', b: 'Projects' },
    { a: '80+', b: 'Courses' },
]

const HomeCard2 = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
            {FHGHG.map((x, i) => (
                <div key={i} className='bg-[var(--bg3)] px-2 py-3 rounded-md shadow-md text-center border'>
                    <span className='text-3xl text-[var(--icon)] font-bold'>{x.a}</span> <br />
                    <span className='font-bold text-[#fff]'>{x.b}</span> <br />
                    <span className='text-[#fff]'>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
            ))}
        </div>
    );
};

export default HomeCard2;
