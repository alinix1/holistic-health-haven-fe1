import type React from "react";
import type { CartDropdownProps } from "../../model";
import xIcon from "../../assets/x-mark.png";

// interface CartDropdownProps {
//   toggleIsCartOpen: () => void;
// }

const CartDropdown: React.FC<CartDropdownProps> = ({ toggleIsCartOpen }) => {
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
            className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
            onClick={toggleIsCartOpen}
          />
        </div>
        <p>Your cart is empty</p>
        <button
          type="button"
          className="mt-4 w-full bg-[#5A7340] text-[#Ffffff] py-2 rounded hover:bg-[#F2DCB3] hover:text-[#000]"
        >
          GO TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
