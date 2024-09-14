import Icons from '@/library/icons';
import React from 'react';

const ServiceCard = () => {

    return (
        <div className='relative'>
            <div className='p-1 rounded-md overflow-hidden'>
                {/* <Image src={Imagesdf.banner1} width={"100%"} height={600} alt='Banner service pages' /> */}
            </div>

            <div className='absolute top-0 left-0 p-4'>
                <div className='flex justify-center items-center min-h-screen'>
                    <div>
                        <div className='w-auto text-[10rem] bg-cyan-900 rounded-full p-2 border-[18px] border-red-600'>
                            {Icons.Home}
                        </div>
                        <br />
                        <br />
                        <div className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sint dolores! Quia repellendus enim praesentium optio dicta! Nisi totam non id ullam magnam saepe reiciendis quod eligendi inventore quam unde, ab temporibus fuga ipsum consequatur, odit aut? Odit quae, eaque inventore excepturi voluptas accusamus, saepe voluptatibus sequi officia qui explicabo dolorem distinctio, ipsa quaerat quibusdam nostrum et consectetur totam. Ipsum commodi necessitatibus placeat facilis dolore, dolor doloremque, dicta aut laudantium, adipisci veritatis? Neque, alias, debitis dignissimos sunt aspernatur optio, ex soluta assumenda quia quo rem vero voluptas harum quibusdam id qui voluptate! Saepe porro voluptatem voluptates quas fugiat dolore? Praesentium!
                        </div>
                        <br />
                        <br />

                        <div className='text-[10rem] bg-cyan-900 rounded-full p-2 border-[18px] border-red-600'>
                            {Icons.Home}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ServiceCard;