import Swipers from '@/ui/Swiper';
import Movies from '@/ui/Movies';

export default async function Page() {
  return (
    <div>
      <span className="w-full my-10 select-none  text-center text-8xl uppercase font-[700] bg-gradient-to-r from-[rgba(126,213,111,0.2)] to-[rgba(40,180,131,1)] inline-block bg-clip-text text-transparent  z-50 ">
        ZK
      </span>

      <div className="px-10">
        {/* @ts-ignore */}
        <Movies />
      </div>
      <Swipers />
    </div>
  );
}
