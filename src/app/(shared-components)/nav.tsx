'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Nav = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch('http://localhost:3000/cart-api');
            const cart = await res.json();
            console.log(cart);
            setCart(cart);
        };
        fetchCart();
    }, []);
    return (
        <nav className='bg-green-600 text-white h-16 p-4 flex justify-between items-center px-20'>
            <div className='flex items-center gap-20'>
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
