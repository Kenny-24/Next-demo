'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
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
        <p className="select-none top-40 w-screen text-center text-8xl uppercase font-[700] bg-gradient-to-r from-[rgba(126,213,111,0.2)] to-[rgba(40,180,131,1)] inline-block bg-clip-text text-transparent  absolute z-50 ">
          Gucci
        </p>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {/** Slides */}
          {swipePicture.map((value, index) => {
            return (
              <SwiperSlide style={{ aspectRatio: '2.8/1' }} key={index}>
                <Image fill quality={100} src={value.value} alt={''} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
