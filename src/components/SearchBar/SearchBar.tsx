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
    <section className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="w-full bg-transparent placeholder:text-slate-600 text-slate-800 text-sm border border-slate-500 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-700 hover:border-slate-500 shadow-sm focus:shadow"
          placeholder="Search holistic products..."
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <img
            src={searchIcon}
            alt="search icon"
            className="w-4 h-4 filter brightness-0 invert"
          />
          <span className="ml-2">Search</span>
        </button>
      </div>
    </section>
  );
};
export default SearchBar;
