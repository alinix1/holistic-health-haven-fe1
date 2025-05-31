import type React from "react";
import type { SearchBarProps } from "../../resources/model";
import searchIcon from "../../assets/magnifying-glass.svg";

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearchInput,
  searchValue,
  handleSearch,
  hasSearched,
  filteredProducts,
}) => {
  return (
    <section className="w-full min-w-[300px]">
      <div className="relative">
        <input
          aria-label="Search holistic products"
          className="font-inter ease w-full rounded-md border border-slate-500 bg-transparent py-2 pl-3 pr-16 text-sm text-slate-800 shadow-sm transition duration-300 placeholder:text-slate-600 hover:border-slate-500 focus:border-slate-700 focus:shadow focus:outline-none"
          placeholder="Search holistic products..."
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-1 top-1 flex items-center rounded border border-transparent bg-slate-800 px-2.5 py-1 text-center text-sm text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleSearch}
        >
          <img
            src={searchIcon}
            alt="search icon"
            className="h-4 w-4 brightness-0 invert filter"
          />
          <span className="font-inter ml-2">Search</span>
        </button>
        {hasSearched && filteredProducts.length === 0 && (
          <p className="mt-4 text-center font-bold text-gray-700">
            No products match your search! Try searching by a different name.
          </p>
        )}
      </div>
    </section>
  );
};
export default SearchBar;
