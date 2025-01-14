import type React from "react";
import type { SearchBarProps } from "../../model";
import searchIcon from "../../assets/magnifying-glass.svg";

// interface SearchBarProps {
//   handleSearchInput: (value: string) => void;
//   searchValue: string;
// }

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearchInput,
  searchValue,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleSearchInput(value);
  };
  return (
    <section>
      <input
        className="search font-inherit text-inherit bg-white-300 border border-gray-300 px-7 w-90"
        type="text"
        name="searchValue"
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
