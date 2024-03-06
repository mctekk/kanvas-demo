'use client';
import { client } from '@/kanvas-client';
import { UserData } from '@kanvas/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function useUserPage() {
  const [user, setUser] = useState({} as UserData);

  useEffect(() => {
    async function fetchData() {
      const response = await client.users.getUserData();

      setUser(response);
    }
    fetchData();
  }, []);

  return {
    models: {
      user,
    },
  };
}
export default function UserPage() {
  const { models } = useUserPage();
  console.log(models.user);
  return (
    <>
      <div className='flex items-center justify-center mt-48 flex-col'>
        <div>
          <p>Name: {models.user?.firstname}</p>
          <p>Email: {models.user.email}</p>
          <p>UUID: {models.user.uuid}</p>
        </div>
      <Link
        href='/'
        onClick={() => {
          localStorage.clear();
        }}
        className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
      >
        logout
      </Link>
      </div>

    </>
  );
}
