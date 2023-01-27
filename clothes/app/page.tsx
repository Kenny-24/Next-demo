import Swipers from '@/ui/Swiper';
import Movies from '@/ui/Movies';
import { Suspense } from 'react';

export default async function Page() {
  // const movies = await getMovies();

  return (
    <div className="px-10">
      <span className="select-none  text-center text-8xl uppercase font-[700] bg-gradient-to-r from-[rgba(126,213,111,0.2)] to-[rgba(40,180,131,1)] inline-block bg-clip-text text-transparent  z-50 ">
        Gucci
      </span>
      <Suspense fallback={<p className="text-red-500">Loading...</p>}>
        {/* @ts-ignore */}
        <Movies />
      </Suspense>
      <Suspense fallback={<p className="text-red-500">Loading...</p>}>
        <Swipers />
      </Suspense>
    </div>
  );
}
