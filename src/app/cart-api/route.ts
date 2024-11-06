export const cart: any = [];

export async function GET() {
    return Response.json(cart);
}

export async function POST(request: Request) {
    const product = await request.json();
    console.log(product);
    cart.push(product);
    console.log(cart);
    return new Response(JSON.stringify(cart), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}
