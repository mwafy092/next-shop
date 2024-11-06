'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '../stores/cart-store';
const Product = ({ product }: { product: any }) => {
    const [showAllDescription, setShowAllDescription] = useState(false);
    const { update } = useCartStore();
    const handleAddToCart = async (product) => {
        try {
            const res = await fetch('http://localhost:3000/cart-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            const data = await res.json();
            update(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='bg-white rounded-2xl shadow-lg w-80 h-auto flex flex-col justify-beween'>
            <div className='flex justify-center bg-green-100 rounded-t-3xl'>
                <Image
                    src={product?.thumbnail}
                    width={200}
                    height={200}
                    alt='product image'
                    className='p-4'
                />
            </div>
            <div className='flex flex-col p-4 gap-2'>
                <p className=' flex justify-between items-center'>
                    <span className='font-extrabold'>$ {product?.price}</span>{' '}
                    <span className='font-semibold flex items-center gap-2'>
                        <span>{product?.rating}</span>{' '}
                        <Image
                            src='/icons/star.png'
                            width={25}
                            height={25}
                            alt='rating icon'
                        />
                    </span>
                </p>
                <p className='font-normal text-sm'>{product?.title}</p>
                <p className='font-thin text-sm'>
                    {showAllDescription
                        ? product?.description
                        : product?.description?.substring(0, 40) + '...'}
                    <button
                        className='block decoration-dotted underline text-xs font-normal'
                        onClick={() =>
                            setShowAllDescription(!showAllDescription)
                        }>
                        Show {showAllDescription ? 'less' : 'more'}
                    </button>
                </p>
                <div className='mt-4 flex justify-between items-baseline'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image
                                src='/icons/category.png'
                                width={15}
                                height={15}
                                alt='category icon'
                            />
                            <span className='text-xs'>{product?.category}</span>
                        </div>
                        {product?.brand && (
                            <div className='flex gap-1 items-center'>
                                <Image
                                    src='/icons/brand.png'
                                    width={15}
                                    height={15}
                                    alt='brand icon'
                                />
                                <span className='text-xs'>
                                    {product?.brand}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center gap-1'>
                        {product.stock > 0 ? (
                            <>
                                <Image
                                    src='/icons/in-stock.png'
                                    width={15}
                                    height={15}
                                    alt='in stock icon'
                                />
                                <span className='text-xs'>In stock</span>
                            </>
                        ) : (
                            <>
                                <span className='text-xs'>Out of stock</span>
                            </>
                        )}
                    </div>
                </div>
                <button
                    className='bg-green-600 text-sm text-white py-1 px-3 rounded-md w-full my-2'
                    onClick={() => handleAddToCart(product)}>
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Product;
