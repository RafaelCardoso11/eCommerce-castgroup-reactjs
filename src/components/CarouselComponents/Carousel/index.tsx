import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";
import banner5 from "../../../assets/banner5.jpg";
import banner6 from "../../../assets/banner6.jpg";
import { ImageCarousel } from "../ImageCarousel";

SwiperCore.use([Autoplay, Pagination, Navigation]);
export function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => clearTimeout()}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <ImageCarousel src={banner1} alt="Banner Smartphone" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCarousel src={banner3} alt="Banner Smartphone" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCarousel src={banner4} alt="Banner Smartphone" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCarousel src={banner2} alt="Banner Smartphone" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCarousel src={banner5} alt="Banner Smartphone" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCarousel src={banner6} alt="Banner Smartphone" />
      </SwiperSlide>
    
    </Swiper>
  );
}
