'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import CartCard from './shared/cart-card';
import { toast } from 'react-toastify';
import { useCartStore } from '../stores/cart-store';
import { ProductType } from '../types/types';
const Page = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
    const { update }: any = useCartStore();
    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch('http://localhost:3000/cart-api');
            const cart = await res.json();
            setCart(cart);
        };
        fetchCart();
    }, []);
    const handleDeleteProduct = async (product: ProductType) => {
        try {
            const res = await fetch('http://localhost:3000/cart-api', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            const data: ProductType[] = await res.json();
            toast.success('Item deleted successfully');
            setCart(data);
            update(data);
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    return (
        <section className='p-12 bg-slate-100'>
            <h1 className='text-2xl font-bold'>Shopping cart</h1>
            <div className='flex flex-col rounded-2xl'>
                {cart.map((cartItem: ProductType, index: number) => (
                    <CartCard
                        key={index}
                        cartItem={cartItem}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
        </section>
    );
};

export default Page;
