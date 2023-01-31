'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { useSearchParams } from 'next/navigation';

export default function Auth() {
  const searchParams = useSearchParams();
  const callbackUrl: any = searchParams.get('callbackUrl');
  const { data } = useSession();
  console.log(8888, data);
  console.log(666);
  return (
    <div className="mt-20">
      <button
        onClick={() => {
          signIn('google');
        }}
      >
        Sign In
      </button>
    </div>
  );
}
