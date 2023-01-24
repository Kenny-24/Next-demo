'use client';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { swipePicture } from '@/lib/swipePicture';

export default function Swipers() {
  return (
    <Swiper
      className="mt-2 h-96"
      // 使用分页器模块
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {swipePicture.map((value, index) => {
        return (
          <SwiperSlide className=" relative " key={index}>
            <Image
              style={{ objectFit: 'fill' }}
              fill
              src={value.value}
              alt={''}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
