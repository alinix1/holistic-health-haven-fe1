import React from "react";
import cartIcon from "../../assets/shopping-cart.svg";

interface CartIconProps {
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ className }) => {
  return (
    <img className={`w-6 h-6 ${className}`} src={cartIcon} alt="Cart Icon" />
  );
};

export default CartIcon;
