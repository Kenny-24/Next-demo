// 布局
'use client';
import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import { SessionProvider } from 'next-auth/react';

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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
