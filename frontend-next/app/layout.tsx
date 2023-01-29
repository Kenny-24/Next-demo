// 布局
import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';

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
        {children}
      </body>
    </html>
  );
}
