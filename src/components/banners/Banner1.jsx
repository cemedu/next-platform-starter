import React from 'react';
import './Banner.css';
import Image from 'next/image';

const Banner1 = ({ image }) => {
    return (
        <div>
            <Image src={image} width={2200} height={1500} alt='banner 2' />
        </div>
    )
}

export default React.memo(Banner1);