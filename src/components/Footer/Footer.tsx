import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container flex h-[13.5vh] w-full items-center justify-center bg-[#DECDB5] p-4">
      <p className="footer-text font-inter text-left text-sm italic text-black md:text-lg">
        &copy; 2025 by&nbsp;
        <a
          href="https://github.com/alinix1/holistic-health-haven-fe1"
          className="font-medium text-[#0040a0] hover:underline"
        >
          Ali Nix
        </a>
        . All rights reserved.
      </p>
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
