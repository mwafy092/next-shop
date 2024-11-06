import React from 'react';
import Product from '../(shared-components)/product';

const Products = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json();
    console.log(products);
    return (
        <section className='flex gap-8 flex-wrap p-10'>
            {products?.products?.map((productData: any) => (
                <Product
                    key={productData?.id}
                    product={productData}
                />
            ))}
        </section>
    );
};

export default Products;
