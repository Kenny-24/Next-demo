'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/scrollbar';
// import Swiper core and required modules
import { Autoplay, Mousewheel, Scrollbar, FreeMode, A11y } from 'swiper';
import { Box } from '@mui/material';
import { swipePicture } from '@/lib/swipePicture';
import Image from 'next/image';
// install Swiper modules

export default function Swipers() {
  return (
    <Box>
      {/** Slider main container */}
      <Box>
        <Swiper
          className="my-10"
          modules={[Mousewheel, FreeMode, Autoplay, Scrollbar, A11y]} // install Swiper modules
          spaceBetween={40}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          freeMode={true}
          mousewheel={{
            forceToAxis: true,
          }}
        >
          {/** Slides */}
          {swipePicture?.map((value) => {
            return (
              <SwiperSlide style={{ aspectRatio: '1/1' }} key={value.id}>
                <Image
                  className="rounded-3xl"
                  fill
                  quality={100}
                  src={value.value}
                  alt={''}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
