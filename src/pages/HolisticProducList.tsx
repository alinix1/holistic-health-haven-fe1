import type React from "react";
import HolisticProductCard from "../components/HolisticProductCard/HolisticProductCard";
import { getOptimizedImageUrl } from "../apiCalls";
import type { HolisticProductListProps } from "../resources/model";

const HolisticProductCards: React.FC<HolisticProductListProps> = ({
  holisticProducts,
}) => {
   
   const holisticHerbalImage = getOptimizedImageUrl('static', 'holistic_herbal', 1920, 70);
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
    <div
      className="w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${holisticHerbalImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 justify-items-center mx-auto max-w-screen-xl gap-6">
        {holisticCards}
      </div>
    </div>
  );
};
export default HolisticProductCards;
