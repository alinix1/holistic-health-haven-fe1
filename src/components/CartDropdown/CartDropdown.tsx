import type React from "react";
import { useNavigate } from "react-router-dom";
import type { CartDropdownProps } from "../../resources/model";
import { useCartTotal } from "../../hooks/useCart";
import Button from "../Button/Button";
import xIcon from "../../assets/x-mark.png";

const CartDropdown: React.FC<CartDropdownProps> = ({
  toggleIsCartOpen,
  cartItems,
}) => {
  const navigate = useNavigate();
  const total = useCartTotal();

  const handleCheckout = (): void => {
    navigate("/checkout");
  };

  return (
    <div className="absolute left-0 top-full z-[100] mt-2 flex max-h-[70rem] min-h-[10rem] w-64 flex-col rounded border border-slate-500 bg-white p-4 shadow-lg">
      {/* Dropdown Content */}

      <img
        src={xIcon}
        alt="Close cart"
        className="absolute right-2 top-2 h-4 w-4 cursor-pointer"
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

      <div className="mt-8">
        {cartItems.length > 0 ? (
          <>
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="mb-2 flex items-center justify-between"
                >
                  <span>
                    {item.quantity} x {item.product_title}
                  </span>
                  <span className="font-semibold">
                    ${Number(item.price).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mb-4 font-bold">Total: ${total.toFixed(2)}</p>
            <div className="flex flex-col items-center justify-center">
              <Button onClick={handleCheckout}>Go to Checkout</Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-center text-gray-700">Your cart is empty</p>
            <Button onClick={handleCheckout}>Go to Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDropdown;
