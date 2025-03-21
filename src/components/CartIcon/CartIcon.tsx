import type React from "react";
import type { CartIconProps } from "../../resources/model";
import cartIcon from "../../assets/shopping-cart.svg";

const CartIcon: React.FC<CartIconProps> = ({
  toggleIsCartOpen,
  cartCount,
  className,
}) => {
  const handleClick = (): void => {
    toggleIsCartOpen();
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative flex cursor-pointer items-center justify-center ${className}`}
      aria-label="Toggle Cart Dropdown"
    >
      <img className="w-10 h-10" src={cartIcon} alt="Shopping Cart" />
      {cartCount > 0 && <span className="absolute bottom-3">{cartCount}</span>}
    </button>
  );
};

export default CartIcon;
