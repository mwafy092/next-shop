import { ProductType } from '../types/types';
export let cart: ProductType[] = [];

export async function GET() {
    return Response.json(cart);
}

export async function POST(request: Request) {
    const product = await request.json();
    cart.push(product);
    return new Response(JSON.stringify(cart), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}

export async function DELETE(request: Request) {
    const product = await request.json();
    const newCart: ProductType[] = cart.filter(
        (cartItem: ProductType) => cartItem?.id !== product?.id
    );
    cart = newCart;
    return new Response(JSON.stringify(cart), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}
