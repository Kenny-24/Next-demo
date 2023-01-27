import React, { Suspense } from 'react';
import TodosList from './TodosList';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Suspense fallback={<p className="text-red-500">Loading...</p>}>
        <div className="flex-1 space-x-10">
          {/* @ts-ignore */}
          <TodosList />
        </div>
        {/* Suspense为啥不管用 */}
        <div className="flex-1 space-x-10">{children}</div>
      </Suspense>
    </div>
  );
}
