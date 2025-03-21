import type React from "react";
import { Carousel } from "flowbite-react";
import aboutProduct from "../../assets/about_product.jpg";
import sage from "../../assets/sage.jpg";
import yoga from "../../assets/yoga.jpg";
const CarouselSection: React.FC = () => {
  return (
    <div className="relative w-full flex items-center bg-slate-800 h-56 sm:h-64 xl:h-80 2xl:h-96 accessible-carousel">
      <Carousel>
        <img
          src={aboutProduct}
          alt="Holistic health products arranged on display"
          className="absolute w-full md:w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
        <img
          src={sage}
          alt="Dried sage bundle for aromatherapy and cleansing"
          className="absolute  w-full w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
        <img
          src={yoga}
          alt="Yoga mat and accessories for wellness practice"
          className="absolute  w-full w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
