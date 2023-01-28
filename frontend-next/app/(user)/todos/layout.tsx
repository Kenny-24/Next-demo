import React from 'react';
import BasicSelect from '@/ui/Select';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex space-x-4 divide-x-2 p-5">
      <div>
        <BasicSelect />
      </div>
      <div className="flex-1 text-center justify-center">{children}</div>
    </div>
  );
}
