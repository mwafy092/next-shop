import React from 'react';
import Image from 'next/image';
import { ProductType } from '@/app/types/types';
const CartCard = ({
    cartItem,
    handleDeleteProduct,
}: {
    cartItem: ProductType;
    handleDeleteProduct: Function;
}) => {
    return (
        <div className=' p-6 flex gap-4 border-b-2 justify-between items-center'>
            <div className='flex  gap-4 '>
                <div>
                    <Image
                        src={cartItem?.thumbnail}
                        width={200}
                        height={200}
                        alt={cartItem?.title}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <p>{cartItem?.category}</p>
                    <p>{cartItem?.brand}</p>
                    <p>{cartItem?.title}</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <p>$ {cartItem?.price}</p>
                <button
                    className='flex gap-1 items-center'
                    onClick={() => handleDeleteProduct(cartItem)}>
                    <Image
                        src='/icons/delete.png'
                        width={20}
                        height={20}
                        alt='delete product icon'
                    />
                </button>
            </div>
        </div>
    );
};

export default CartCard;
