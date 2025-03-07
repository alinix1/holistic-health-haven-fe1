import React from "react";
import { Carousel } from "flowbite-react";
import aboutProduct from "../../assets/about_product.jpg";
import sage from "../../assets/sage.jpg";
import yoga from "../../assets/yoga.jpg";
const CarouselSection: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-800 h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src={aboutProduct}
          alt="about product"
          className="absolute block w-[50rem] h-auto object-cover"
        />
        <img
          src={sage}
          alt="sage"
          className="absolute block w-[50rem] h-auto object-cover"
        />
        <img
          src={yoga}
          alt="yoga mat"
          className="absolute block w-[50rem] h-auto object-cover"
        />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
