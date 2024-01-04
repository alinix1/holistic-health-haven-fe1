const Footer = () => {
  return (
    <footer className="footer-container flex items-center justify-center h-13.5vh w-screen p-8 bg-[#BFB2A3]">
      <span className="footer-text italic text-lg">
        &copy; 2024 by{" "}
        <a
          href="https://github.com/alinix1/holistic-health-haven-fe1"
          className="text-[#402B18] hover:underline"
        >
          Ali Nix
        </a>
        . All rights reserved.
      </span>
    </footer>
  );
};
export default Footer;
