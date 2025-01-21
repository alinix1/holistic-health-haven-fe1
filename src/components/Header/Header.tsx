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
    <div className="bg-F2E8DF p-2 flex items-center justify-between">
      <nav className="nav-bar flex items-center mb-60 relative">
        <CartIcon
          className="mr-4"
          isCartOpen={isCartOpen}
          toggleIsCartOpen={openCart}
          cartCount={cartCount}
        />
        {/* Cart Dropdown */}
        {isCartOpen && (
          <CartDropdown toggleIsCartOpen={closeCart} cartItems={cartItems} />
        )}

        <Link to="/testimonials" className="mr-4 font-extrabold">
          <button
            type="button"
            className="nav-button rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-[#D9C4B2] hover:text-[#402B18] focus:text-[#402B18] focus:outline-none focus:ring-0 active:text-[#8C6645]"
          >
            Testimonials
          </button>
        </Link>
        <Link to="/" className="mr-4 font-extrabold">
          <button
            type="button"
            className="nav-button rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-[#D9C4B2] hover:text-[#402B18] focus:text-[#402B18] focus:outline-none focus:ring-0 active:text-[#8C6645]"
          >
            Holistic Products
          </button>
        </Link>
        <Link to="/payment" className="ml-4 font-extrabold">
          <button
            type="button"
            className="nav-button rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-[#D9C4B2] hover:text-[#402B18] focus:text-[#402B18] focus:outline-none focus:ring-0 active:text-[#8C6645]"
          >
            Payment
          </button>
        </Link>
        <Link to="/about" className="ml-4 font-extrabold">
          <button
            type="button"
            className="nav-button rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-[#D9C4B2] hover:text-[#402B18] focus:text-[#402B18] focus:outline-none focus:ring-0 active:text-[#8C6645]"
          >
            About
          </button>
        </Link>
      </nav>
      <section>
        <h1 className="text-black text-4xl font-bold mb-4">
          Holistic Health Haven
        </h1>
        <article className="mt-12 flex">
          <div className="mr-5">{children}</div>
        </article>
      </section>
      <Link to="/">
        <img
          style={{ width: "12rem", height: "12rem" }}
          src={logo}
          alt="tree logo"
        />
      </Link>
    </div>
  );
};

export default Header;
