'use client'
import { Context } from '@/context/StateProvider';
import Icons from '@/library/icons';
import React, { useContext } from 'react';

const ProductCard = () => {
        const { state: { data } } = useContext(Context);
        return (
                <>
                        <div className='p-4  bg-[var(--bg2)] border rounded-md'>
                                <h2 className='text-2xl font-bold text-[var(--icon)]'>Product Summary</h2>
                                <br />
                                <div className='space-y-3'>
                                        <p className='text-[var(--icon1)] font-bold' >{data?.title}</p>
                                        <p className='flex justify-between'><b>Product :</b> {data?.access_only}</p>
                                        <p className='flex justify-between'><b>Product Type :</b> {data?.access_type}</p>
                                        <p className='flex justify-between'><b>Expire In :</b> {data?.access_days} days</p>
                                        <hr />
                                        <p className='flex justify-between'><b>Taxes :</b> <span>0</span></p>
                                        <p className='flex justify-between'><b>Other Charges :</b> <span>0</span></p>
                                        <p className='flex justify-between'><b>Applied Coupon :</b> <span>0</span></p>
                                        <p className='flex justify-between'><b>Sub Total :</b> <span className='flex items-center gap-2'>{Icons.Rupees}{data?.price}</span></p>
                                        <hr />
                                        <p className='flex justify-between text-2xl items-center'><b>Total : </b> <span className='flex items-center gap-2'>{Icons.Rupees}{data.price}</span> </p>
                                </div>
                        </div>
                </>
        )
}

export default ProductCard;