import React from "react";

const Dropdown: React.FC = () => {
  return (
    <section className="ailments-search h-10">
      <select name="ailments ml-2 h-20vh w-30vw">
        <option value="">Select Ailment</option>
        <option value="Fibromyalgia">Fibromyalgia</option>
        <option value="Stress & Anxiety">Stress & Anxiety</option>
        <option value="Insomnia">Insomnia</option>
        <option value="Cold & Flu">Cold & Flu</option>
        <option value="Inflammation & Joint pain">
          Inflammation & Joint pain
        </option>
        <option value="Heart Problems">Heart Problems</option>
        <option value="Hormonal Imbalances">Hormonal Imbalances</option>
        <option value="Low Energy">Low Energy</option>
        <option value="Liver Problems">Liver Problems</option>
        <option value="Gut Problems">Gut Problems</option>
      </select>
    </section>
  );
};
export default Dropdown;
