import type React from "react";
import { useHistory } from "react-router-dom";
import type { CartDropdownProps } from "../../resources/model";
import { useCartTotal } from "../../hooks/useCart";
import Button from "../Button/Button";
import xIcon from "../../assets/x-mark.png";

const CartDropdown: React.FC<CartDropdownProps> = ({
  toggleIsCartOpen,
  cartItems,
}) => {
  const history = useHistory();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const handleCheckout = () => {
    history.push("/checkout");
  };

  return (
    <div className="absolute top-full left-0 mt-2 rounded bg-white border border-slate-500 p-4 shadow-lg z-[100] min-h-[10rem] max-h-[70rem] w-64 flex flex-col">
      {/* Dropdown Content */}
      <div className="relative">
        <img
          src={xIcon}
          alt="Close cart"
          className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Close cart"
          onClick={toggleIsCartOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleIsCartOpen();
            }
          }}
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
                    ${Number(item.price).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-bold mb-4">Total: ${total.toFixed(2)}</p>
            <div className="flex flex-col justify-center items-center">
              <Button className="mt-4 md:mt-0" onClick={handleCheckout}>
                Go to Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="mb-4 text-center text-gray-700">Your cart is empty</p>
            <Button className="mt-4 md:mt-0" onClick={handleCheckout}>
              Go to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDropdown;
