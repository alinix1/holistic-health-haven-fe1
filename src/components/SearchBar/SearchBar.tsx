import React, { useState } from "react";
import searchIcon from "../../assets/magnifying-glass.svg";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);
  return (
    <section>
      <input
        className="search font-inherit text-inherit bg-white-300 border border-gray-300 px-7 w-90"
        type="text"
        name="search"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search holistic products"
        style={{
          backgroundImage: `url(${searchIcon})`,
          backgroundSize: "20px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px center",
        }}
      />
    </section>
  );
};
export default SearchBar;
