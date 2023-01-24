import Link from 'next/link';

export default function Links() {
  return (
    <header className="space-x-5 p-10 flex">
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
      <Link
        href="/todos"
        className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
      >
        Todos
      </Link>
    </header>
  );
}
