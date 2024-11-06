export let cart: any = [];

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
    const newCart = cart.filter(
        (cartItem: any) => cartItem?.id !== product?.id
    );
    cart = newCart;
    return new Response(JSON.stringify(cart), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}
