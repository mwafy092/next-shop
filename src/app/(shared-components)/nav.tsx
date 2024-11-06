'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Nav = () => {
    const [cart, setCart] = useState([]);
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
                <button className='font-bold'>Home</button>
            </div>
            <button className='flex gap-2 items-center'>
                <Image
                    src='/icons/cart.png'
                    width={32}
                    height={32}
                    alt='cart icon'
                />
                <span>{cart.length}</span>
            </button>
        </nav>
    );
};

export default Nav;
