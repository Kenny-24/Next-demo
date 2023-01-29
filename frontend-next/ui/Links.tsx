'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="flex">
      {demos.items.map((item) => {
        const isActive = item.slug === selectedLayoutSegments;

        return (
          <div className="flex" key={item.slug}>
            {item.isDisabled ? (
              <div
                className="flex rounded-md px-3 py-2 text-sm font-medium text-zinc-600"
                title="Coming Soon"
              >
                {item.name}
              </div>
            ) : (
              <Link
                href={`/${item.slug}`}
                className={clsx(
                  'flex rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                  { 'text-zinc-400': !isActive, 'text-white': isActive },
                )}
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
