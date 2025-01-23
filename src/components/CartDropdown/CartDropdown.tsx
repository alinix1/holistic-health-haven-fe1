import type React from "react";
import { useHistory } from "react-router-dom";
import { mapHolisticProductToCartItem } from "../../utils/cartUtils";
import type { CartDropdownProps } from "../../model";
import xIcon from "../../assets/x-mark.png";

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
    const cartItemsForCheckout = cartItems.map(mapHolisticProductToCartItem); // Map HolisticProduct to CartItem
    history.push("/checkout", { cartItems: cartItemsForCheckout });
  };

  return (
    <div className="absolute top-full right-0 mt-2 rounded bg-white border border-slate-500 p-4 shadow-lg z-[100] min-h-[10rem] max-h-[30rem]">
      {/* Dropdown Content */}
      <div className="relative">
        <img
          src={xIcon}
          alt="close icon"
          className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
          onClick={toggleIsCartOpen}
        />
      </div>
      <div className="mt-8">
        {cartItems.length > 0 ? (
          <>
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.quantity} x {item.product_title}
                  </span>
                  <span className="ml-2 font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-bold mb-4">Total: ${total.toFixed(2)}</p>
            <div className="flex flex-col justify-center items-center">
              <button
                type="button"
                onClick={handleCheckout}
                className="rounded bg-[#5A7340] px-4 py-2 text-md font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-[#8BA663]-accent-300 hover:shadow-primary-2 focus:bg-[#8BA663]-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#8BA663]-600 active:shadow-[#8BA663]-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Go to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="mb-4 text-center text-gray-700">Your cart is empty</p>
            <button
              type="button"
              onClick={handleCheckout}
              className="rounded bg-[#5A7340] px-4 py-2 text-md font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-[#8BA663]-accent-300 hover:shadow-primary-2 focus:bg-[#8BA663]-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#8BA663]-600 active:shadow-[#8BA663]-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Go to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDropdown;
