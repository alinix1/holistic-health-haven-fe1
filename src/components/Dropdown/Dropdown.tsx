import type React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { DropdownProps } from "../../resources/model";

const Dropdown: React.FC<DropdownProps> = ({
  handleAilmentSelect,
  ailment,
}) => {
  const ailments = [
    "Select Ailment",
    "Fibromyalgia",
    "Stress & Anxiety",
    "Insomnia",
    "Cold & Flu",
    "Bacterial & Fungal Infections",
    "Inflammation & Joint pain",
    "Heart Problems",
    "Hormonal Imbalances",
    "Low Energy",
    "Liver Problems",
    "Gut Problems",
    "Muscle Recovery",
    "Overall Immunity",
    "Low Libido",
  ];

  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      {/* Dropdown Button */}
      <MenuButton className="relative inline-flex w-[200px] font-inter justify-center gap-x-1.5 ml-10 rounded bg-white border border-slate-500 px-4 py-2 shadow-lg flex flex-col">
        {ailment || "Select Ailment"}
        <ChevronDownIcon
          aria-hidden="true"
          className="absolute top-2 right-2 w-5 h-5 text-gray-500"
        />
      </MenuButton>
      {/* Dropdown Items */}
      <MenuItems className="absolute max-h-80 left-0 z-10 mt-2 w-56 origin-top-left rounded-md font-inter bg-white shadow-lg ring-1 ring-black/5 focus:outline-none overflow-y-auto">
        {ailments.map((ailmentOption) => (
          <MenuItem key={ailmentOption}>
            {({ active }) => (
              <button
                type="button"
                onClick={() =>
                  handleAilmentSelect(
                    ailmentOption === "Select Ailment" ? "" : ailmentOption,
                  )
                }
                className={`${
                  active
                    ? "bg-gray-100 font-inter text-gray-900"
                    : "text-gray-700"
                } block w-full text-left px-4 py-2 text-sm`}
              >
                {ailmentOption}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

// Mobile Navigation Menu (for smaller screens)
export const MobileNavMenu: React.FC = () => {
  const navLinks = [
    { name: "Testimonials", to: "/testimonials" },
    { name: "Review Us", to: "/reviews" },
    { name: "Holistic Products", to: "/" },
    { name: "Payment", to: "/payment" },
    { name: "About Us", to: "/about" },
  ];

  return (
    <div
      className="absolute top-10 
          left-2 
          w-30 right-0 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
    >
      <div className="flex flex-col gap-y-2 px-2 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="block rounded px-2 py-2 text-xs uppercase text-black hover:bg-slate-700 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
