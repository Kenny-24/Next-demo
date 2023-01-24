'use client';

import Header from '@/ui/Header';
import Links from '@/ui/Link';

export default function GlobalNav() {
  return <Header children={<Links />} />;
}
