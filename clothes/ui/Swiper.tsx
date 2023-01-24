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
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      //   slidesPerView={3}
      //   navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {swipePicture.map((value, index) => {
        return (
          <SwiperSlide key={index}>
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
