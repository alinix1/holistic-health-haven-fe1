import type React from "react";
// import { useEffect } from "react";
import type { HolisticProductPageProps } from "../../model";
import { Link } from "react-router-dom";
import WaterDropGrid from "../WaterDropGrid/WaterDropGrid";
import holisticMushroom from "../../assets/holistic_mushrooms.jpg";
import holisticTree from "../../assets/holistic_tree.jpg";
// import ReviewForm from "../ReviewForm/ReviewForm";

// interface HolisticProduct {
//   id: number;
//   product_type: string[];
//   product_title: string;
//   img: string;
//   product_description: string;
//   price: number;
// }

// interface HolisticProductPageProps {
//   holisticProducts: HolisticProduct[];
//   id: number;
// }

const HolisticProductPage: React.FC<HolisticProductPageProps> = ({
  holisticProducts,
  id,
  addToCart,
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
          className="product-img w-72 h-72 object-cover mr-6 ml-10 mt-10 rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-4-strong"
          src={selectedProduct.img}
          alt={selectedProduct.product_title}
        />
        <article className="button-container">
          <button
            type="button"
            className="inline-block rounded bg-[#5A7340] text-[#fff] px-5 py-2 text-sm font-medium leading-normal shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-[#8C6645] hover:px-7 hover:py-3 hover:text-[#ffffff] hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-[#402B18] focus:text-[#ffffff] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-[#67733D] active:text-[#BFB2A3] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] transition-all duration-200 ease-in-out focus:outline-none focus:ring-0"
            style={{ width: "fit-content" }}
            onClick={() => {
              addToCart(selectedProduct);
            }}
          >
            Add to Cart
          </button>

          <Link to="/" className="link">
            <button
              type="button"
              className=" mt-4 ml-10 text-[#fff] bg-[#5A7340] px-8 py-2 rounded"
            >
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
        <p className="product-description mb-4 px-4 max-w-md leading-relaxed text-center">
          {selectedProduct.product_description}
        </p>
        <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
      </article>
      <article className="flex flex-col items-end ml-10 mt-10 mb-10 gap-10 animate-[fade-in-right_1s_ease-in-out]">
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
