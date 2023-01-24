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
      <body className="overflow-y-scroll bg-zinc-900">
        <GlobalNav />
        <div className="pt-20 text-6xl text-center text-purple-700">
          Hello World!
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
