import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container flex items-center justify-center h-13.5vh w-screen p-8 bg-[#DECDB5]">
      <span className="footer-text font-inter italic text-lg">
        &copy; 2025 by{" "}
        <a
          href="https://github.com/alinix1/holistic-health-haven-fe1"
          className="text-[#402B18] hover:underline"
        >
          Ali Nix
        </a>
        . All rights reserved.
      </span>
      <Link
        to="/terms-and-conditions"
        className="ml-4 font-quicksand font-extrabold"
      >
        <button
          type="button"
          className="nav-button rounded px-6 pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
        >
          Terms & Conditions
        </button>
      </Link>
      <Link to="/privacy-policy" className="ml-4 font-quicksand font-extrabold">
        <button
          type="button"
          className="nav-button rounded px-6 pb-2 pt-2.5 text-xs uppercase text-black transition duration-150 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-0"
        >
          Privacy Policy
        </button>
      </Link>
    </footer>
  );
};
export default Footer;
