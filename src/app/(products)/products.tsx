import React from 'react';
import Product from './shared/product';
import { MainProductType, ProductType } from '../types/types';
const Products = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const products: MainProductType = await response.json();
    return (
        <section className='flex gap-8 flex-wrap py-10 justify-center'>
            {products?.products?.map((productData: ProductType) => (
                <Product
                    key={productData?.id}
                    product={productData}
                />
            ))}
        </section>
    );
};

export default Products;
