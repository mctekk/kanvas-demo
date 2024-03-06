'use client'
import { Auth } from '@kanvas/phoenix/dist/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  return <Auth.LoginPage redirect={() => router.push('/user')} />;
}