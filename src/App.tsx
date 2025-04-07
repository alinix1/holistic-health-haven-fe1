import type React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import type { HolisticProduct } from "./resources/model";
import { useToggle } from "./hooks/useToggle";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import HolisticProductList from "./pages/HolisticProducList";
import HolisticProductPage from "./pages/HolisticProductPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ReviewSubmit from "./components/ReviewSubmit/ReviewSubmit";
import Modal from "./components/Modal/Modal";
import CheckoutItem from "./pages/CheckoutItem";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import PaymentSuccess from "./pages/PaymentSuccess";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer/Footer";
import BadURL from "./pages/BadURL";
import spinner from "./assets/Yin_and_Yang.gif";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { getHolisticProducts } from "./apiCalls";

import "./App.css";

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
    openModal();
    getHolisticProducts()
      .then((data) => {
        setHolisticProducts(data);
        setLoading(false);
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
      <div className="flex flex-col items-center justify-center h-full mt-20">
        <img
          src={spinner}
          alt="loading spinner Yin & Yang"
          loading="lazy"
          className="loading-image w-20 h-20"
        />
        <h4 className="mt-4">
          ...Please wait for the page to load fully. Namaste.
        </h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col h-full px-4 py-6">
          {/* Title Section */}
          <div className="relative">
            <h2
              className="absolute top-6 left-6 text-sm md:text-2xl font-bold text-white bg-black px-2 py-1 rounded-sm 
    rotate-[-40deg] translate-x-[-40%] translate-y-[-35%] z-50 md:static md:rotate-0 md:translate-x-0 md:translate-y-0 md:bg-transparent md:text-black"
            >
              15% off your first order
            </h2>
          </div>

          {/* Form Container */}
          <div className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg bg-white shadow mt-40">
              <form>
                <div className="flex flex-col md:flex-col items-center md:flex-row gap-4 w-full">
                  <label htmlFor="email" className="text-sm font-medium">
                    Enter your email to subscribe:
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full md:flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-500"
                    required
                  />
                  <Button type="submit" className="p-2 ml-2 w-2/3">
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
      <Header>
        <div className="flex flex-col md:flex-row items-center justify-start gap-4">
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
        <Routes>
          <Route 
            path="/"
            element={
              <HolisticProductList holisticProducts={productList} />}
          />
          <Route
            path="/testimonials"
           element={<TestimonialsPage />}
          />
          <Route path="/reviews" element={<ReviewSubmit />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />}
          />
          <Route path="/checkout" element={<CheckoutItem />} 
          />
          <Route path="/payment" element={<PaymentContainer />} 
          />
          <Route
            path="/payment-success"
            element={<PaymentSuccess />}
          />
          <Route path="/about" element={<AboutPage />} 
          />
        <Route 
          path="/:id" 
          element={<HolisticProductPage holisticProducts={holisticProducts}
           />} 
          />
        <Route path="/badURL" element={<BadURL />} 
          />
        <Route 
          path="*" 
          element={<Navigate to="/badURL" replace />} 
        />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
