// 布局
import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import Provider from './provider';

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
