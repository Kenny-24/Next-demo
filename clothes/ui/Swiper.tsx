'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/scrollbar';
// import Swiper core and required modules
import { Autoplay, Navigation, Scrollbar, FreeMode, A11y } from 'swiper';
import SwiperCore from 'swiper';
import { Box } from '@mui/material';
import { swipePicture } from '@/lib/swipePicture';
import Image from 'next/image';
// install Swiper modules
SwiperCore.use([Navigation]);

export default function Swipers() {
  return (
    <Box>
      {/** Slider main container */}
      <Box>
        <Swiper
          className="rounded-3xl"
          modules={[FreeMode, Autoplay, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          scrollbar
          freeMode={true}
        >
          {/** Slides */}
          {swipePicture.map((value, index) => {
            return (
              <SwiperSlide style={{ aspectRatio: '.8/1' }} key={index}>
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
