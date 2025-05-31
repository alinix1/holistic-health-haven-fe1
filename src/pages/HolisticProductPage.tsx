import type React from "react";
import { Link, useParams } from "react-router-dom";
import type { HolisticProductPageProps } from "../resources/model";
import WaterDropGrid from "../components/WaterDropGrid/WaterDropGrid";
import holisticMushroom from "../assets/holistic_mushrooms1.webp";
import holisticTree from "../assets/holistic_tree1.webp";
import Button from "../components/Button/Button";
import { useCart } from "../hooks/useCart";

const HolisticProductPage: React.FC<HolisticProductPageProps> = ({
  holisticProducts,
}) => {
  const { id } = useParams();
  const { dispatch } = useCart();

  const productId = id ? Number.parseInt(id, 10) : null;
  const selectedProduct = productId
    ? holisticProducts.find((product) => product.id === productId)
    : null;

  if (!selectedProduct) {
    return (
      <div>
        <WaterDropGrid />
      </div>
    );
  }

  const handleAddToCart = (): void => {
    dispatch({ type: "ADD_ITEM", payload: selectedProduct });
  };

  return (
    <div className="flex flex-col items-center justify-start bg-[#F5F5F5] md:flex-row">
      <section className="order-2 flex flex-col items-center md:order-1">
        <img
          className="h-72 w-72 rounded object-cover shadow-none transition-shadow duration-500 ease-in-out hover:shadow-4-strong md:ml-10 md:mr-6 md:mt-10"
          src={selectedProduct.img}
          alt={selectedProduct.product_title}
        />
        <div className="mt-5 flex items-start justify-center gap-4">
          <button
            type="button"
            className="text-md inline-block rounded bg-[#5A7340] px-5 py-2 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition-all duration-200 ease-in-out hover:bg-[#8C6645] hover:px-7 hover:py-3 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-[#402B18] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-[#67733D] active:text-[#BFB2A3] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Link to="/">
            <Button>Back</Button>
          </Link>
        </div>
      </section>
      <section className="order-1 ml-4 flex flex-col items-center text-center md:order-2 md:text-left">
        <h2 className="font-inter mb-2 text-lg font-bold">
          {selectedProduct.product_title}
        </h2>
        <p className="font-inter mb-2 font-semibold italic">
          {selectedProduct.product_type.join(", ")}
        </p>
        <p className="mb-4 max-w-md px-4 font-jakarta leading-relaxed tracking-normal md:text-justify">
          {selectedProduct.product_description}
        </p>
        <p className="font-inter text-lg font-bold">
          ${Number(selectedProduct.price).toFixed(2)}
        </p>
      </section>
      <section className="order-3 mb-10 mt-10 flex animate-[fade-in-up_1s_ease-in-out] flex-col items-center gap-10 md:ml-10 md:animate-[fade-in-right_1s_ease-in-out] md:items-end">
        <img
          className="mt-10 h-72 w-72 rounded border-4 border-[#402B18] object-cover"
          src={holisticMushroom}
          alt="Holistic Mushroom"
        />
        <img
          className="mt-10 h-72 w-72 rounded border-4 border-[#402B18] object-cover"
          src={holisticTree}
          alt="Holistic Tree"
        />
      </section>
    </div>
  );
};

export default HolisticProductPage;
