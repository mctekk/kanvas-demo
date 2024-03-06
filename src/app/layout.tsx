import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ServerCoreStore } from '@kanvas/phoenix';
import RootClientLayout from './client';
import { client } from '@/kanvas-client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kanvas demo',
  description: 'A implementation of the kanvas sdk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ServerCoreStore sdk={client}>
      <RootClientLayout >
        <html className=''>
          <body className={`${inter.className} flex min-h-screen min-w-full`}>
            {children}
          </body>
        </html>
      </RootClientLayout>
    </ServerCoreStore>
  );
}
