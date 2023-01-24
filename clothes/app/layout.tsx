// 布局
import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import 'swiper/css';

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
        <div>{children}</div>
      </body>
    </html>
  );
}
