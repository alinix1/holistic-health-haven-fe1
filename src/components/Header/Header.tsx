import type React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton } from "@headlessui/react";
import logo from "../../assets/holistic_logo1.webp";
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
      <div className="relative flex flex-col items-start justify-start md:flex-row">
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
        <div className="hidden flex-row items-center md:flex md:gap-x-4 custom:hidden">
          <Link to="/testimonials" className="font-extrabold">
            <button
              type="button"
              className="nav-button gap-x-2 rounded px-2 py-2 pb-2 pt-2 text-left text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 md:px-8"
            >
              Testimonials
            </button>
          </Link>
          <Link to="/reviews" className="font-extrabold">
            <button
              type="button"
              className="nav-button rounded px-2 py-2 pb-2 pt-2 text-left text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 md:px-8"
            >
              Review Us
            </button>
          </Link>
          <Link to="/" className="font-extrabold">
            <button
              type="button"
              className="nav-button rounded px-2 py-2 pb-2 pt-2 text-left text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 md:px-8"
            >
              Holistic Products
            </button>
          </Link>
          <Link to="/payment" className="font-extrabold">
            <button
              type="button"
              className="nav-button rounded px-2 py-2 pb-2 pt-2 text-left text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 md:px-8"
            >
              Payment
            </button>
          </Link>
          <Link to="/about" className="font-extrabold">
            <button
              type="button"
              className="nav-button rounded px-2 py-2 pb-2 pt-2 text-left text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0 md:px-8"
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
      {/* Right Section: Logo */}
      <div className="absolute right-0 top-0 hidden md:block">
        <Link to="/">
          <img
            className="h-auto w-full max-w-[7rem]"
            src={logo}
            alt="company name homepage"
          />
        </Link>
      </div>
      {/* Mobile Menu Toggle Button */}
      <div className="block md:hidden custom:block">
        <Menu>
          <MenuButton
            as="button"
            type="button"
            aria-label="Open menu"
            className="p-2 text-black"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </MenuButton>
          <MobileNavMenu />
        </Menu>
      </div>
      {/* Title Section */}
      <section className="mt-4 text-center">
        <h1 className="font-inter mb-10 text-4xl font-bold text-black">
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
