'use client';

import Navi from '@/ui/Navi';
import { Suspense } from 'react';
export default function GlobalNav() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading...</p>}>
        <Navi children={undefined} />;
      </Suspense>
    </div>
  );
}
