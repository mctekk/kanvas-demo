'use client';
import { client } from '@/kanvas-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  async function onSubmit() {
    try {
      const response = await client.auth.login(email, password);
      localStorage.setItem('token', response?.token);
      router.push('/user');
    } catch (err) {
      console.error(err);
    }
  }

  return {
    models: {
      email,
      password,
    },
    operations: {
      setEmail,
      setPassword,
      onSubmit,
    },
  };
}

export default function LoginForm() {
  const { models, operations } = useLoginForm();
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://app.kanvas.dev/images/kanvas_logo.svg'
            alt='Kanvas'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={models.email}
                  onChange={(e) => operations.setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={models.password}
                  onChange={(e) => operations.setPassword(e.target.value)}
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='button'
                onClick={operations.onSubmit}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{' '}
            <Link
              href='/signup'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
