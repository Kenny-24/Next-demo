'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  // const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
      {/* {demos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div>{demo.name}</div>
            </div>

            {demo.items.map((item) => {
              const isActive = item.slug === selectedLayoutSegments;

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600"
                      title="Coming Soon"
                    >
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                        { 'text-zinc-200': !isActive, 'text-white': isActive },
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
      })} */}
      <header className="p-10 flex flex-wrap justify-evenly bg-indigo-800">
        <Link
          href="/"
          className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
        >
          Home
        </Link>
        <Link
          href="/kun"
          className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
        >
          View
        </Link>
      </header>
    </div>
  );
}
