import React from 'react';
import Image from 'next/image';
const Product = ({ product }: { product: any }) => {
    console.log(product);
    return (
        <div className='bg-lime-300 w-64 h-96'>
            <Image
                src={product?.thumbnail}
                width={150}
                height={150}
                alt=''
            />
            <div>
                <p>{product?.title}</p>
                <p>{product?.price}</p>
            </div>
        </div>
    );
};

export default Product;
