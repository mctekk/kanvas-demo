import { Templates } from '@kanvas/phoenix';
import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen min-w-full'>
      <Templates.AuthLayout
        backgroundImage={
          <div className='h-full w-full bg-red-400'></div>
        }
      >
        <Image
          src='/images/kanvas_logo.svg'
          width={160}
          height={30}
          alt='Kanvas logo'
        />
        {children}
      </Templates.AuthLayout>
    </div>
  );
}
