import type React from "react";
import { Link } from "react-router-dom";
import type { HolisticProductProps } from "../../resources/model";

const HolisticProductCard: React.FC<HolisticProductProps> = ({
  id,
  product_type,
  product_title,
  img,
}) => {
  return (
    <Link to={`/${id}`}>
      <div className="product-card m-4 box-border flex max-w-sm flex-col items-center gap-7 overflow-hidden rounded-lg bg-white p-4 px-8 shadow-2xl sm:min-h-[30rem]">
        <h1 className="product-title font-inter mt-3 text-2xl font-bold">
          {product_title}
        </h1>
        <img
          className="product-img h-48 w-80 rounded-lg object-cover shadow-none transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          src={img}
          alt={product_title}
          loading="lazy"
        />
        <p className="product-type mb-5 font-jakarta font-semibold">
          {product_type.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default HolisticProductCard;
