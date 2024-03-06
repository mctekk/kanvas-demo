'use client';

import { client } from '@/kanvas-client';
import { ClientCoreStore } from '@kanvas/phoenix/dist/client';
import { PropsWithChildren } from 'react';

export default function RootClientLayout({ children }: PropsWithChildren) {
  return (
    <ClientCoreStore sdk={client} >
      <>{children}</>
    </ClientCoreStore>
  );
}
