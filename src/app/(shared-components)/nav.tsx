'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCartStore } from '../stores/cart-store';
import { ProductType } from '../types/types';
const Nav = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
    const cartStore = useCartStore();
    useEffect(() => {
        const fetchCart = async () => {
            const res: Response = await fetch('http://localhost:3000/cart-api');
            const cart: ProductType[] = await res.json();
            setCart(cart);
        };
        fetchCart();
    }, [cartStore]);
    return (
        <nav className='bg-green-600 text-white h-20 p-4 flex justify-between items-center'>
            <div className='flex items-center gap-8'>
                <Link
                    href='/'
                    className='flex items-center gap-2'>
                    <Image
                        src='/logo.png'
                        width={50}
                        height={50}
                        alt='next cart logo'
                    />
                    <span className='font-bold'>Next Shop</span>
                </Link>
                <Link
                    href='/'
                    className='font-bold'>
                    Home
                </Link>
            </div>
            <Link
                href='/cart'
                className='flex gap-2 items-center'>
                <Image
                    src='/icons/cart.png'
                    width={32}
                    height={32}
                    alt='cart icon'
                />
                <span>{cart.length}</span>
            </Link>
        </nav>
    );
};

export default Nav;
