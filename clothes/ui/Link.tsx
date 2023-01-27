'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
const naviList = [
  { name: 'Home', link: '/' },
  { name: 'View', link: '/kun' },
  { name: 'Todos', link: '/todos' },
  { name: 'Search', link: '/search' },
];
export default function Links() {
  return (
    <>
      <div className="flex">
        {naviList.map((item) => (
          <Link key={item.name} href={item.link}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
