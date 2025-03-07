import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/holistic_logo.png";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import type { HeaderProps } from "../../resources/model";
import { useCart } from "../../hooks/useCart";

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const openCart = () => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0,
  );

  return (
    <div className="w-full bg-[#DECDB5]">
      {/* Header Container: Navigation and Logo */}
      <div className="max-w-screen-xl mx-auto flex items-start justify-between pt-0 relative">
        {/* Left & Center Section: Cart and Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Left Section: Cart Icon and Dropdown */}
          <div className="flex items-center space-x-4">
            <CartIcon
              isCartOpen={isCartOpen}
              toggleIsCartOpen={openCart}
              cartCount={cartCount}
            />
            {isCartOpen && (
              <CartDropdown
                toggleIsCartOpen={closeCart}
                cartItems={cartItems}
              />
            )}
          </div>
          {/* Center Section: Navigation Links */}
          <div className="flex items-start space-x-4">
            <Link to="/testimonials" className="font-extrabold">
              <button
                type="button"
                className="nav-button rounded px-8 min-w-[8rem] pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
              >
                Testimonials
              </button>
            </Link>
            <Link to="/reviews" className="font-extrabold">
              <button
                type="button"
                className="nav-button rounded px-8 min-w-[8rem] pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
              >
                Review Us
              </button>
            </Link>
            <Link to="/" className="font-extrabold">
              <button
                type="button"
                className="nav-button rounded px-6 min-w-[8rem] pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
              >
                Holistic Products
              </button>
            </Link>
            <Link to="/payment" className="font-extrabold">
              <button
                type="button"
                className="nav-button rounded px-6 min-w-[8rem] pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
              >
                Payment
              </button>
            </Link>
            <Link to="/about" className="font-extrabold">
              <button
                type="button"
                className="nav-button rounded px-6 min-w-[8rem] pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 "
              >
                About Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Logo */}
        <div className="self-center">
          <Link to="/">
            <img
              style={{ width: "12rem", height: "12rem" }}
              src={logo}
              alt="tree logo"
            />
          </Link>
        </div>
      </div>

      {/* Title Section */}
      <section className="text-center mt-4">
        <h1 className="font-inter text-black text-4xl font-bold mb-10">
          Holistic Health Haven
        </h1>
        <article className="mb-10 flex justify-center">
          <div>{children}</div>
        </article>
      </section>
    </div>
  );
};

export default Header;
