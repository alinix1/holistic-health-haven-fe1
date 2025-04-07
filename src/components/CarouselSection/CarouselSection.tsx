import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import aboutProduct from "../../assets/about_product.jpg";
import sage from "../../assets/sage.jpg";
import yoga from "../../assets/yoga.jpg";
const CarouselSection: React.FC = () => {
  return (
    <div className="relative w-full bg-slate-800 h-56 sm:h-64 xl:h-80 2xl:h-96 accessible-carousel">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src={aboutProduct}
            alt="Holistic health products arranged on display"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sage}
            alt="Dried sage bundle for aromatherapy and cleansing"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={yoga}
            alt="Yoga mat and accessories for wellness practice"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSection;
