import type React from "react";
import type { CartIconProps } from "../../resources/model";
import cartIcon from "../../assets/shopping-cart.svg";

const CartIcon: React.FC<CartIconProps> = ({
  toggleIsCartOpen,
  cartCount,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={toggleIsCartOpen}
      className={`relative flex items-center justify-center ${className}`}
      aria-label="Toggle Cart Dropdown"
    >
      <img className="h-10 w-10" src={cartIcon} alt="Shopping Cart" />
      {cartCount > 0 && <span className="absolute bottom-3">{cartCount}</span>}
    </button>
  );
};

export default CartIcon;
