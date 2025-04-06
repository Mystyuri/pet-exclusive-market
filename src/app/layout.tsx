import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/MainLayouts/Header';
import { Footer } from '@/components/MainLayouts/Footer';
import { Main } from '@/components/MainLayouts/Main';

const geistSans = Roboto({
    variable: '--font-sans',
    subsets: ['latin'],
});

const geistMono = Roboto_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Exclusive',
    description: `Мок проект магазина "Exclusive"`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[min-content_1fr_min-content] bg-background justify-items-stretch min-h-screen gap-8`}
            >
                <Header />
                <Main>{children}</Main>
                <Footer />
            </body>
        </html>
    );
}
