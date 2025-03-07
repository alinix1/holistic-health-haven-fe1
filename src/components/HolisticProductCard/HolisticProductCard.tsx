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
      <div
        className="product-card box-border flex flex-col items-center gap-7 m-4 p-4 px-8 w-3/4 h-auto rounded-lg shadow-xl bg-white overflow-hidden"
        key={id}
      >
        <h1 className="product-title mt-3 font-inter text-2xl font-bold">
          {product_title}
        </h1>
        <img
          className="product-img w-80 h-48 object-cover rounded-lg shadow-none transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          src={img}
          alt={product_title}
        />
        <p className="product-type font-jakarta font-semibold mb-5">
          {product_type.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default HolisticProductCard;
