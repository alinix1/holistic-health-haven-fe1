import type React from "react";
import { useHistory } from "react-router-dom";
import type { CartDropdownProps } from "../../model";
import xIcon from "../../assets/x-mark.png";

// interface CartDropdownProps {
//   toggleIsCartOpen: () => void;
// }

const CartDropdown: React.FC<CartDropdownProps> = ({
  toggleIsCartOpen,
  cartItems,
}) => {
  const history = useHistory();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    history.push("/checkout");
  };

  return (
    <div>
      <div
        className="absolute top-12 right-0 bg-white border border-gray-300 p-4 shadow-lg z-50"
        style={{
          width: "200px",
          display: "block",
        }}
      >
        <div className="relative">
          <img
            src={xIcon}
            alt="close icon"
            className="absolute top-1 right-1 w-4 h-4 cursor-pointer"
            onClick={toggleIsCartOpen}
          />
        </div>
        {/* Conditional Rendering of Cart Items */}
        {cartItems.length > 0 ? (
          <>
            <ul className="mb-4 mt-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.quantity} x {item.product_title}
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button
              type="button"
              onClick={handleCheckout}
              className="ms-1 inline-block rounded bg-[#5A7340] px-8 py-2 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-[#8BA663]-accent-300 hover:shadow-primary-2 focus:bg-[#8BA663]-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#8BA663]-600 active:shadow-[#8BA663]-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Go to checkout
            </button>
          </>
        ) : (
          <>
            <p>Your cart is empty</p>
            <button
              type="button"
              onClick={handleCheckout}
              className="inline-block rounded bg-[#5A7340] text-[#fff] shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-[#4C6334] hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-[#3E522C] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-[#4A5C30] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
            >
              GO TO CHECKOUT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
