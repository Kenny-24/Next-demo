'use client';

import Navi from '@/ui/Navi';
import Links from '@/ui/Link';

export default function GlobalNav() {
  return <Navi children={<Links />} />;
}
