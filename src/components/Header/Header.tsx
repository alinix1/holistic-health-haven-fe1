import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/holistic_logo.png";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import type { HeaderProps } from "../../model";

// interface HeaderProps {
//   children?: React.ReactNode;
// }

const Header: React.FC<HeaderProps> = ({ children, cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Calculate the total cart count
  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0
  );

  return (
    <header className="bg-F2E8DF">
      <div className="p-2 flex items-center justify-between">
        <nav className="nav-bar flex items-center">
          <CartIcon
            className="mr-4"
            isCartOpen={isCartOpen}
            toggleIsCartOpen={openCart}
            cartCount={cartCount}
          />
          {isCartOpen && (
            <CartDropdown toggleIsCartOpen={closeCart} cartItems={cartItems} />
          )}
          <Link
            to="/testimonials"
            className="mr-4 text-[#736555] font-extrabold"
          >
            Testimonials
          </Link>
          <Link to="/" className="text-[#736555] font-extrabold">
            Holistic Products
          </Link>
          <Link to="/payment" className="ml-4 text-[#736555] font-extrabold">
            Payment
          </Link>
        </nav>

        <section>
          <h1 className="text-black font-regular text-4xl">
            Holistic Health Haven
          </h1>
          <div className="mt-4">{children}</div>
        </section>

        <Link to="/">
          <img
            style={{ width: "12rem", height: "12rem" }}
            src={logo}
            alt="tree logo"
          />
        </Link>
      </div>

      {/* Divider */}
      <div className="mt-2">
        <hr className="h-0.5 border-t-0 bg-gray-600 dark:grey/10 w-full" />
      </div>
    </header>
  );
};

export default Header;
