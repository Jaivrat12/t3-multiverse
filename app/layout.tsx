import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import type { ChildrenProps } from '@/types';

import './globals.css';

// TODO: Game-like font
const poppins = Poppins({
	subsets: ['latin'],
	weight: [
		'100', '200', '300',
		'400', '500', '600',
		'700', '800', '900',
	],
});

export const metadata: Metadata = {
    title: 'T3 Multiverse',
    description: 'Enjoy a multiverse of Tic Tac Toe Games!',
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html
            lang="en"
            className="dark"
        >
            <body className={poppins.className}>
                <Providers>
                    <Navbar />
					{children}
				</Providers>
            </body>
        </html>
    );
}
