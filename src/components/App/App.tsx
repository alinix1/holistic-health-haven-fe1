import type React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import type { HolisticProduct } from "../../resources/model";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import CarouselSection from "../CarouselSection/CarouselSection";
import HolisticProductList from "../HolisticProductList/HolisticProducList";
import HolisticProductPage from "../HolisticProductPage/HolisticProductPage";
import TestimonialsPage from "../TestimonialsPage/TestimonialsPage";
import ReviewSubmit from "../ReviewSubmit/ReviewSubmit";
import Modal from "../Modal/Modal";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import AboutPage from "../AboutPage/AboutPage";
import Footer from "../Footer/Footer";
import BadURL from "../BadURL/BadURL";
import spinner from "../../assets/Yin_and_Yang.gif";
import { getHolisticProducts } from "../../apiCalls";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    getHolisticProducts()
      .then((data) => {
        setHolisticProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAilmentSelect = (selectedAilment: string) => {
    if (!selectedAilment) {
      setAilment("");
      setFilteredProducts([]);
      return;
    }
    setAilment(selectedAilment);

    const formattedAilment = selectedAilment.toLowerCase().trim();
    const filtered = holisticProducts.filter((holisticProduct) =>
      holisticProduct.product_type.some(
        (type) => type.toLowerCase().trim() === formattedAilment,
      ),
    );

    setFilteredProducts(filtered);
  };

  const handleSearchInput = (value: string) => {
    setSearchValue(value);

    if (value === "") {
      setHasSearched(false);
    }
  };

  const handleSearch = () => {
    const mainProductList = ailment
      ? holisticProducts.filter((holisticProduct) =>
          holisticProduct.product_type.some(
            (type) =>
              type.toLowerCase().trim() === ailment.toLowerCase().trim(),
          ),
        )
      : holisticProducts;

    const searchResults = mainProductList.filter((product) =>
      product.product_title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredProducts(searchResults);
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
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-8">
              15% off your first order
            </h2>
          </div>

          {/* Form Container */}
          <div className="flex-grow flex items-center justify-center mt-20">
            <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg bg-white shadow">
              <form>
                <div className="flex items-center justify-between w-full">
                  <label htmlFor="email" className="text-sm font-medium">
                    Enter your email to subscribe:
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-500"
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
              className="text-blue-500 underline hover:text-blue-700"
            >
              terms & conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-500 underline hover:text-blue-700"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
      </Modal>
      <Header>
        <div className="flex justify-start gap-x-4">
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HolisticProductList holisticProducts={productList} />
            )}
          />
          <Route
            exact
            path="/testimonials"
            render={() => <TestimonialsPage />}
          />
          <Route exact path="/reviews" component={ReviewSubmit} />

          <Route
            exact
            path="/terms-and-conditions"
            component={TermsAndConditions}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/checkout" render={() => <CheckoutItem />} />
          <Route exact path="/payment" render={() => <PaymentContainer />} />
          <Route
            exact
            path="/payment-success"
            render={() => <PaymentSuccess />}
          />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route
            exact
            path="/:id"
            render={({ match }) => (
              <HolisticProductPage
                holisticProducts={holisticProducts}
                id={Number.parseInt(match.params.id, 10)}
              />
            )}
          />
          <Route path="/badURL" component={BadURL} />
          <Redirect from="*" to="/badURL" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
