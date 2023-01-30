'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
export default function Auth() {
  const { data } = useSession();
  console.log(8888, data);
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
