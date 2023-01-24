import { demos } from '@/lib/demos';
import Link from 'next/link';
import Image from 'next/image';
import Swipers from '@/ui/Swiper';

export default function Page() {
  return (
    <div className="space-y-6">
      <Swipers />
      <div className="text-6xl text-center text-purple-700">Hello World!</div>
      <div className="text-purple-400 text-center pt-10 text-3xl">
        Nice coding!
      </div>
      <Image
        className="mx-auto pb-10"
        src="/yu.png"
        unoptimized
        alt="Next.js Hoodie"
        width={500}
        height={90}
      />
    </div>
  );
}
