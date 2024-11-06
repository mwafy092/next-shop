import type { Metadata } from 'next';
import './globals.css';
import Nav from './(shared-components)/nav';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Nav />
                <main>{children}</main>
            </body>
        </html>
    );
}