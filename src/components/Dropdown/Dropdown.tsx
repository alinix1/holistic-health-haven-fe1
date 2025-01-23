import type React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { DropdownProps } from "../../model";

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
    "Inflammation & Joint pain",
    "Heart Problems",
    "Hormonal Imbalances",
    "Low Energy",
    "Liver Problems",
    "Gut Problems",
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Dropdown Button */}

      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {ailment || "Select Ailment"}
        <ChevronDownIcon aria-hidden="true" className="w-5 h-5 text-gray-500" />
      </MenuButton>
      {/* Dropdown Items */}
      <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        {ailments.map((ailmentOption) => (
          <MenuItem key={ailmentOption}>
            {({ active }) => (
              <button
                type="button"
                onClick={() =>
                  handleAilmentSelect(
                    ailmentOption === "Select Ailment" ? "" : ailmentOption
                  )
                }
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
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

export default Dropdown;
