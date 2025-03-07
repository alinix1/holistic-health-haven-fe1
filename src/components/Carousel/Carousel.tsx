import React from "react";
import "flowbite";
import aboutProduct from "../../assets/about_product.jpg";
import sage from "../../assets/sage.jpg";
import yoga from "../../assets/yoga.jpg";
const Carousel: React.FC = () => {
  return (
    <div
      id="animation-carousel"
      className="relative w-full overflow-hidden bg-slate-800"
      data-carousel="static"
    >
      {/* Carousel inner container and items */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src={aboutProduct}
            className="absolute block w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel item 1"
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src={sage}
            className="absolute block w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel item 2"
          />
        </div>
        {/* Item 3 (active) */}
        <div
          className="hidden duration-200 ease-linear"
          data-carousel-item="active"
        >
          <img
            src={yoga}
            className="absolute block w-[50rem] h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="carousel item 3"
          />
        </div>
      </div>

      {/* Carousel controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
