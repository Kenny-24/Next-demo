// 布局
import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import { Suspense } from 'react';
import Fabs from '@/ui/Fab';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>CodingTalk</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-200">
        <GlobalNav />
        <Suspense fallback={<p className="text-red-500">Loading...</p>}>
          <div>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
