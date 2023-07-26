"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const LivePerformance = () => {
  return (
    <div className="py-20 px-32">
      <div className="flex items-center justify-center py-5">
        <img src="/live.png" alt="" />
      </div>

      <div className="py-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            Autoplay: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="2.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LivePerformance;
