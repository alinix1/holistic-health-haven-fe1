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
      <MenuButton className="font-inter relative flex w-[200px] items-center justify-between rounded border border-slate-500 bg-white px-4 py-2 shadow-lg">
        {ailment || "Select Ailment"}
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
      </MenuButton>
      {/* Dropdown Items */}
      <MenuItems className="font-inter absolute left-0 z-10 mt-2 max-h-80 w-56 origin-top-left overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
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
    <MenuItems className="absolute top-10 left-2 w-40 bg-white shadow-lg rounded ring-1 ring-black/5 focus:outline-none z-[60]">
      <div className="flex flex-col gap-y-2 px-2 py-2">
        {navLinks.map((link) => (
          <MenuItem key={link.name}>
            {({ active }: { active: boolean }) => (
              <Link
                to={link.to}
                className={`${
                  active ? "bg-slate-700 text-white" : "text-black"
                } block rounded px-2 py-2 text-xs uppercase hover:bg-slate-700 hover:text-white`}
              >
                {link.name}
              </Link>
            )}
          </MenuItem>
        ))}
      </div>
    </MenuItems>
  );
};

export default Dropdown;
