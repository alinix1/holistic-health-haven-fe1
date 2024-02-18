import React from "react";
import { Link } from "react-router-dom";
import WaterDropGrid from "../WaterDropGrid/WaterDropGrid";
import holisticMushroom from "../../assets/holistic_mushrooms.jpg";
import holisticTree from "../../assets/holistic_tree.jpg";
// import ReviewForm from "../ReviewForm/ReviewForm";

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

  const handleReviewSubmit = (formData: { name: string; review: string }) => {
    console.log("Form data submitted:", formData);
  };

  if (!selectedProduct) {
    return (
      <div>
        <WaterDropGrid />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-start">
      <section className="product-section flex flex-col items-center">
        <img
          className="product-img w-72 h-72 object-cover mr-6 ml-10 mt-10 rounded"
          src={selectedProduct.img}
          alt={selectedProduct.product_title}
        />
        <article className="button-container">
          <button
            className="add-cart-btn mt-4 ml-10 text-[#fff] bg-[#5A7340] px-8 py-2 rounded"
            style={{ width: "fit-content" }}
          >
            Add to Cart
          </button>

          <Link to="/" className="link">
            <button className=" mt-4 ml-10 text-[#fff] bg-[#5A7340] px-8 py-2 rounded">
              Back
            </button>
          </Link>
        </article>
      </section>
      <article className="flex flex-col ml-4">
        <h2 className="product-title text-lg font-bold mb-2">
          {selectedProduct.product_title}
        </h2>
        <p className="product-type mb-2">
          {selectedProduct.product_type.join(", ")}
        </p>
        <p className="product-description mb-2">
          {selectedProduct.product_description}
        </p>
        <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
      </article>
      <article className="flex flex-col items-end ml-">
        <img
          className="w-72 h-72 object-cover mt-10 rounded border-4 border-[#402B18]"
          src={holisticMushroom}
          alt="Holistic Mushroom"
        />
        <img
          className="w-72 h-72 object-cover mt-10 rounded border-4 border-[#402B18]"
          src={holisticTree}
          alt="Holistic Tree"
        />
      </article>
      {/* <ReviewForm onSubmit={handleReviewSubmit} /> */}
    </div>
  );
};

export default HolisticProductPage;
