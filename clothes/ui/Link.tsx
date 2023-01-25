import { Button } from '@mui/material';
import Link from 'next/link';
export default function Links() {
  return (
    <div className="space-x-5 p-5 flex">
      <Link href="/">
        <Button className=" flex justify-center text-blue-100 rounded-lg w-20 h-full py-1">
          Home
        </Button>
      </Link>
      <Link
        href="/kun"
        className="flex justify-center text-blue-100 rounded-lg w-20 py-1"
      >
        <Button className=" flex justify-center text-blue-100 rounded-lg w-20 h-full py-1">
          View
        </Button>
      </Link>
      <Link
        href="/todos"
        className=" flex justify-center text-blue-100 rounded-lg w-20 py-1"
      >
        <Button className=" flex justify-center text-blue-100 rounded-lg w-20 h-full py-1">
          Todos
        </Button>
      </Link>
    </div>
  );
}
