'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
export default function Auth() {
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
