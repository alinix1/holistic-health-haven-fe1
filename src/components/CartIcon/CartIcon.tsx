import type React from "react";
import type { CartIconProps } from "../../model";
import cartIcon from "../../assets/shopping-cart.svg";

// interface CartIconProps {
//   className?: string;
//   isCartOpen: boolean;
//   toggleIsCartOpen: () => void;
// }

const CartIcon: React.FC<CartIconProps> = ({
  isCartOpen,
  toggleIsCartOpen,
  className,
}) => {
  const handleClick = () => {
    toggleIsCartOpen();
  };
  return (
    <div
      onClick={handleClick}
      className={`relative flex cursor-pointer items-center justify-center ${className}`}
    >
      <img className="w-10 h-10" src={cartIcon} alt="Cart Icon" />
      <span className="absolute bottom-3">0</span>
    </div>
  );
};

export default CartIcon;
