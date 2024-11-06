'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import CartCard from './shared/cart-card';
import { toast } from 'react-toastify';
import { useCartStore } from '../stores/cart-store';
import { ProductType } from '../types/types';
import Link from 'next/link';
const Page = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const { update }: any = useCartStore();
    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch('http://localhost:3000/cart-api');
            const cart = await res.json();
            handleGetCartTotal(cart);
            handleMergeCart(cart);
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
            update(data);
            handleGetCartTotal(data);
            handleMergeCart(data);
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    const handleGetCartTotal = (cartData: ProductType[]) => {
        let total = 0;
        cartData.forEach((cartItem: ProductType) => {
            total += cartItem.price;
        });
        console.log(total);
        setTotal(total);
    };
    const handleMergeCart = (cart: ProductType[]) => {
        const mergedData: ProductType[] = cart.reduce(
            (acc: ProductType[], current: ProductType) => {
                const existing = acc.find(
                    (item: ProductType) => item.id === current.id
                );

                if (existing) {
                    existing.count += current.count;
                } else {
                    acc.push({ ...current });
                }

                return acc;
            },
            []
        );
        setCart(mergedData);
    };
    if (cart.length === 0) {
        return (
            <section className='p-10'>
                <h1 className='text-2xl'>Empty Cart</h1>
                <Link
                    href='/'
                    className='text-sm underline'>
                    Continue shopping
                </Link>
            </section>
        );
    }
    return (
        <section className='p-12 bg-slate-100'>
            <h1 className='text-2xl font-bold'>Shopping cart</h1>
            <div className='flex gap-2 flex-wrap'>
                <div className='flex flex-col rounded-2xl flex-1'>
                    {cart.map((cartItem: ProductType, index: number) => (
                        <CartCard
                            key={index}
                            cartItem={cartItem}
                            handleDeleteProduct={handleDeleteProduct}
                        />
                    ))}
                </div>
                {total > 0 && (
                    <div className='w-80 bg-slate-500 text-white p-6 rounded-md h-fit'>
                        <h2 className='text-2xl'>Cart total</h2>
                        <p>$ {total}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Page;
