import type React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton } from "@headlessui/react";
import logo from "../../assets/holistic_logo.png";
import { MobileNavMenu } from "../Dropdown/Dropdown";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import type { HeaderProps } from "../../resources/model";
import { useCart } from "../../hooks/useCart";
import { useToggle } from "../../hooks/useToggle";

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { cartItems } = useCart();
  const {
    isOpen: isCartOpen,
    open: openCart,
    close: closeCart,
  } = useToggle(false);

  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0,
  );

  return (
    <div className="w-full bg-[#DECDB5]">
      {/* Header Container: Cart Icon and Nav Links */}
      <div className="relative flex flex-col md:flex-row items-start justify-start">
        {/* Cart Icon & Dropdown */}
        <div className="flex items-start justify-start px-2">
          <CartIcon
            isCartOpen={isCartOpen}
            toggleIsCartOpen={openCart}
            cartCount={cartCount}
          />
          {isCartOpen && (
            <CartDropdown toggleIsCartOpen={closeCart} cartItems={cartItems} />
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden custom:hidden md:flex flex-row items-center md:gap-x-4">
          <Link to="/testimonials" className="font-extrabold">
            <button
              type="button"
              className="nav-button text-left rounded px-2 py-2 md:px-8 pb-2 pt-2 gap-x-2 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
            >
              Testimonials
            </button>
          </Link>
          <Link to="/reviews" className="font-extrabold">
            <button
              type="button"
              className="nav-button text-left rounded px-2 py-2 md:px-8 pb-2 pt-2 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
            >
              Review Us
            </button>
          </Link>
          <Link to="/" className="font-extrabold">
            <button
              type="button"
              className="nav-button text-left rounded px-2 py-2 md:px-8 pb-2 pt-2 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
            >
              Holistic Products
            </button>
          </Link>
          <Link to="/payment" className="font-extrabold">
            <button
              type="button"
              className="nav-button text-left rounded px-2 py-2 md:px-8 pb-2 pt-2 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
            >
              Payment
            </button>
          </Link>
          <Link to="/about" className="font-extrabold">
            <button
              type="button"
              className="nav-button text-left rounded px-2 py-2 md:px-8 pb-2 pt-2 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 "
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
      {/* Right Section: Logo */}
      <div className="absolute top-0 right-0 hidden md:block">
        <Link to="/">
          <img
            className="w-full max-w-[7rem] h-auto"
            src={logo}
            alt="company name homepage"
          />
        </Link>
      </div>
      {/* Mobile Menu Toggle Button */}
      <div className=" block custom:block md:hidden">
        <button
          type="button"
          aria-label="Open menu"
          onClick={toggleMenu}
          className="absolute p-2 text-black "
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="relative z-20 block custom:block md:hidden">
          <MobileNavMenu />
        </div>
      )}
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
