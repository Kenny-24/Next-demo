'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function Auth() {
  const { data } = useSession();
  console.log(8888, data);
  // 问题 可能是幽灵依赖openid-client版本的问题
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
