import React from "react";

interface HolisticProduct {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
}

interface HolisticProductPageProps {
  holisticProducts: HolisticProduct[];
  id: number;
}

const HolisticProductPage: React.FC<HolisticProductPageProps> = ({
  holisticProducts,
  id,
}) => {
  const selectedProduct = holisticProducts.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Bad URL</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.product_title}</h2>
      <p>{selectedProduct.product_type.join(", ")}</p>
      <p>{selectedProduct.product_description}</p>
      <p>${selectedProduct.price.toFixed(2)}</p>
      <img src={selectedProduct.img} alt={selectedProduct.product_title} />
    </div>
  );
};

export default HolisticProductPage;
