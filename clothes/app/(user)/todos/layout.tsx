import React, { Suspense } from 'react';
import TodosList from './TodosList';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex space-x-2">
        {/* @ts-ignore */}
        <TodosList />
      </div>
      {/* Suspense为啥不管用 */}
      <Suspense fallback={<p className="text-red-500">Loading...</p>}>
        <div>{children}</div>
      </Suspense>
    </div>
  );
}
