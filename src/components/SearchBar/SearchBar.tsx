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
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    handleSearchInput(value);
  };
  return (
    <section className="w-full min-w-[300px]">
      <div className="relative">
        <input
          aria-label="Search holistic products"
          className="w-full font-inter bg-transparent placeholder:text-slate-600 text-slate-800 text-sm border border-slate-500 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-700 hover:border-slate-500 shadow-sm focus:shadow"
          placeholder="Search holistic products..."
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleSearch}
        >
          <img
            src={searchIcon}
            alt="search icon"
            className="w-4 h-4 filter brightness-0 invert"
          />
          <span className="ml-2 font-inter">Search</span>
        </button>
        {hasSearched && filteredProducts.length === 0 && (
          <p className="text-grey-700 font-bold text-center mt-4">
            No products match your search! Try searching by a different name.
          </p>
        )}
      </div>
    </section>
  );
};
export default SearchBar;
