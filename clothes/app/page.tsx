import Swipers from '@/ui/Swiper';

export default function Page() {
  return (
    <div className="px-10">
      <span className="select-none  w-screen text-center text-8xl uppercase font-[700] bg-gradient-to-r from-[rgba(126,213,111,0.2)] to-[rgba(40,180,131,1)] inline-block bg-clip-text text-transparent  z-50 ">
        Gucci
      </span>
      <Swipers />
    </div>
  );
}
