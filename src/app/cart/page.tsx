'use client';
import React from 'react';
import { useEffect } from 'react';
const Page = () => {
    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch('http://localhost:3000/cart-api');
            const cart = await res.json();
            console.log(cart);
        };
        fetchCart();
    }, []);
    return <div>Cart</div>;
};

export default Page;
