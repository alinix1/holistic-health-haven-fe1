import React from "react";

interface DropdownProps {
  handleAilmentSelect: (selectedAilment: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ handleAilmentSelect }) => {
  const ailments = [
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
    <form className="dropdown-form">
      <select
        name="ailments ml-2 h-20vh w-30vw"
        onChange={(event) => handleAilmentSelect(event.target.value)}
      >
        <option value="">Select Ailment</option>
        {ailments.map((ailment) => (
          <option key={ailment} value={ailment}>
            {ailment}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Dropdown;
