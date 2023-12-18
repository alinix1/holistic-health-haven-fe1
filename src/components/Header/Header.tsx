import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/holistic_logo.png";
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "../CartIcon/CartIcon";

const Header: React.FC = () => {
  return (
    <div className="bg-F2E8DF p-8 flex items-center justify-between">
      <nav className="nav-bar flex items-center mb-60">
        <CartIcon className="mr-4" />
        <Link to="/" className="mr-4 text-[#736555] font-extrabold">
          <p className="nav-btn">Testimonials</p>
        </Link>
        <Link to="/" className="text-[#736555] font-extrabold">
          <p className="nav-btn">Holistic Products</p>
        </Link>
      </nav>
      <div>
        <h1 className="text-black font-regular text-4xl mb-4">
          Holistic Health Haven
        </h1>
        <div className="mt-2">
          <Dropdown />
        </div>
        <div className="mt-2">
          <SearchBar />
        </div>
      </div>
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
