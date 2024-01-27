import React from "react";
import cartIcon from "../../assets/shopping-cart.svg";

interface CartIconProps {
  className?: string;
  count?: number;
}

const CartIcon: React.FC<CartIconProps> = ({ className }) => {
  return (
    <div
      className={`relative flex cursor-pointer items-center justify-center ${className}`}
    >
      <img className="w-10 h-10" src={cartIcon} alt="Cart Icon" />
      <span className="absolute bottom-3">0</span>
    </div>
  );
};

export default CartIcon;
