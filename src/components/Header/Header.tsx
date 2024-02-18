import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/holistic_logo.png";
import CartIcon from "../CartIcon/CartIcon";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="bg-F2E8DF p-2 flex items-center justify-between">
      <nav className="nav-bar flex items-center mb-60">
        <CartIcon
          className="mr-4"
          isCartOpen={isCartOpen}
          toggleIsCartOpen={toggleIsCartOpen}
        />
        <Link to="/testimonials" className="mr-4 text-[#736555] font-extrabold">
          <p className="nav-btn">Testimonials</p>
        </Link>
        <Link to="/" className="text-[#736555] font-extrabold">
          <p className="nav-btn">Holistic Products</p>
        </Link>
      </nav>
      <section>
        <h1 className="text-black font-regular text-4xl mb-4">
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
