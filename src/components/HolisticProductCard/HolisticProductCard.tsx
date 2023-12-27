import React from "react";
import { Link } from "react-router-dom";

interface HolisticProductProps {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
}

const HolisticProductCard: React.FC<HolisticProductProps> = ({
  id,
  product_type,
  product_title,
  img,
}) => {
  return (
    <Link to={`/${id}`}>
      <div
        className="product-card box-border flex flex-col items-center gap-7 m-0 w-3/4 h-auto auto rounded-sm shadow-lg bg-white"
        key={id}
      >
        <h1 className="product-title mt-3 text-opacity-70">{product_title}</h1>
        <img
          className="product-img w-48 h-48 object-cover rounded-t-sm"
          src={img}
          alt={product_title}
        />
        <p className="product-type text-opacity-70">{product_type}</p>
      </div>
    </Link>
  );
};

export default HolisticProductCard;
