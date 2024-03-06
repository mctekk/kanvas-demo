'use client';

import { Auth } from '@kanvas/phoenix/dist/client';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();
  return <Auth.RegisterPage redirect={() => router.push('/user')} />;
}
