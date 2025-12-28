import type React from "react";
import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import type { HolisticProduct } from "./resources/model";
import { useToggle } from "./hooks/useToggle";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Footer from "./components/Footer/Footer";
import { getHolisticProducts } from "./apiCalls";
import { AppRoutes } from "./routes/AppRoutes";

const Modal = lazy(() => import("./components/Modal/Modal"));

const App: React.FC = () => {
  const [holisticProducts, setHolisticProducts] = useState<HolisticProduct[]>(
    [],
  );
  const [ailment, setAilment] = useState("");

  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<HolisticProduct[]>(
    [],
  );

  const {
    isOpen: isModalOpen,
    close: closeModal,
    open: openModal,
  } = useToggle(false);

  useEffect(() => {
    getHolisticProducts()
      .then((data) => {
        setHolisticProducts(data);
        setLoading(false);

        setTimeout(() => {
          openModal();
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [openModal]);

  const filterProducts = (
    ailmentValue: string,
    searchTerm = "",
  ): HolisticProduct[] => {
    const formattedAilment = ailmentValue?.toLowerCase().trim() || "";
    const formattedSearch = searchTerm.toLowerCase();

    const productsFilteredByAilment = formattedAilment
      ? holisticProducts.filter((product) =>
          product.product_type.some(
            (type) => type.toLowerCase().trim() === formattedAilment,
          ),
        )
      : holisticProducts;

    return !formattedSearch
      ? productsFilteredByAilment
      : productsFilteredByAilment.filter((product) =>
          product.product_title.toLowerCase().includes(formattedSearch),
        );
  };

  const handleAilmentSelect = (selectedAilment: string): void => {
    if (!selectedAilment) {
      setAilment("");
      setFilteredProducts([]);
      return;
    }
    setAilment(selectedAilment);
    const filteredResults = filterProducts(selectedAilment, searchValue);

    setFilteredProducts(filteredResults);
  };

  const handleSearchInput = (value: string): void => {
    setSearchValue(value);

    if (value === "") {
      setHasSearched(false);

      if (ailment) {
        setFilteredProducts(filterProducts(ailment, ""));
      }
    }
  };

  const handleSearch = (): void => {
    setFilteredProducts(filterProducts(ailment, searchValue));
    setHasSearched(true);
  };

  // Determine the products to display
  const productList =
    searchValue || ailment ? filteredProducts : holisticProducts;

  if (loading) {
    return (
      <div className="mt-20 flex h-full flex-col items-center justify-center">
        <div className="spinner"></div>
        <h4 className="mt-4">...Please wait for the page to load fully.</h4>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Modal with Suspense */}
      {isModalOpen && (
        <Suspense fallback={<div className="hidden"></div>}>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="flex h-full flex-col px-4 py-6">
              {/* Title Section */}
              <div className="relative">
                <h2 className="absolute left-6 top-6 z-50 translate-x-[-40%] translate-y-[-35%] rotate-[-40deg] rounded-sm bg-black px-2 py-1 text-sm font-bold text-white md:static md:translate-x-0 md:translate-y-0 md:rotate-0 md:bg-transparent md:text-2xl md:text-black">
                  15% off your first order
                </h2>
              </div>

              {/* Form Container */}
              <div className="flex flex-grow items-center justify-center">
                <div className="mt-40 w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow">
                  <form>
                    <div className="flex w-full flex-col items-center gap-4 md:flex-row md:flex-col">
                      <label htmlFor="email" className="text-sm font-medium">
                        Enter your email to subscribe:
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="focus-ring-blue-500 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 md:flex-grow"
                        required
                      />
                      <Button type="submit" className="ml-2 w-2/3 p-2">
                        Subscribe
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Terms & Conditions */}
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center text-sm font-bold">
                By subscribing you agree with our{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-[#0056b3] underline hover:text-blue-700"
                >
                  terms & conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#0056b3] underline hover:text-blue-700"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </Modal>
        </Suspense>
      )}
      <Header>
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
          <Dropdown
            handleAilmentSelect={handleAilmentSelect}
            ailment={ailment}
          />

          <SearchBar
            handleSearchInput={handleSearchInput}
            searchValue={searchValue}
            handleSearch={handleSearch}
            filteredProducts={filteredProducts}
            hasSearched={hasSearched}
          />
        </div>
      </Header>
      <CarouselSection />
      <main className="App flex-grow">
        <AppRoutes
          holisticProducts={holisticProducts}
          productList={productList}
          loading={loading}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
