import React from "react";
import HeroItem from "../HeroItem";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
