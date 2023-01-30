import { Session } from 'inspector';
import type { AppProps } from 'next/app';
import Auth from './auth';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Auth />
      {children}
    </div>
  );
}
