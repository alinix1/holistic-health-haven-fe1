import type React from "react";
import HolisticProductCard from "../HolisticProductCard/HolisticProductCard";
import holisticHerbalImage from "../../assets/holistic_herbal.jpg";
import type { HolisticProductListProps } from "../../model";

const HolisticProductCards: React.FC<HolisticProductListProps> = ({
  holisticProducts,
}) => {
  const holisticCards = holisticProducts.map((product) => (
    <HolisticProductCard
      id={product.id}
      key={product.id}
      product_type={product.product_type}
      product_title={product.product_title}
      img={product.img}
      product_description={product.product_description}
      price={product.price}
    />
  ));
  return (
    <div className="background-container justify-center">
      <div
        className="holistic-products-list p-4 grid grid-cols-3 gap-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${holisticHerbalImage})`,
          backgroundSize: "cover",
        }}
      >
        {holisticCards}
      </div>
    </div>
  );
};
export default HolisticProductCards;
