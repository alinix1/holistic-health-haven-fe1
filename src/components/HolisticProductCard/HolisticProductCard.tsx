import type React from "react";
import { Link } from "react-router-dom";
import type { HolisticProductProps } from "../../model";

// interface HolisticProductProps {
//   id: number;
//   product_type: string[];
//   product_title: string;
//   img: string;
//   product_description: string;
//   price: number;
// }

const HolisticProductCard: React.FC<HolisticProductProps> = ({
  id,
  product_type,
  product_title,
  img,
}) => {
  return (
    <Link to={`/${id}`}>
      <div
        className="product-card box-border flex flex-col items-center gap-7 m-4 p-4 px-8 w-3/4 h-auto auto rounded-sm shadow-xl bg-white"
        key={id}
      >
        <h1 className="product-title mt-3 font-bold">{product_title}</h1>
        <img
          className="product-img w-80 h-48 object-cover rounded-t-sm hover:shadow-lg hover:scale-105 transition-transform duration-500"
          src={img}
          alt={product_title}
        />
        <p className="product-type mb-5 text-opacity-70">
          {product_type.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default HolisticProductCard;
