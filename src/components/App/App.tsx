import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import HolisticProductList from "../HolisticProductList/HolisticProducList";
import HolisticProductPage from "../HolisticProductPage/HolisticProductPage";
import TestimonialsPage from "../TestimonialsPage/TestimonialsPage";
import PaymentPage from "../PaymentPage/PaymentPage";
import Footer from "../Footer/Footer";
import BadURL from "../BadURL/BadURL";
import spinner from "../../assets/Yin_and_Yang.gif";
import { getHolisticProducts } from "../../apiCalls";

import "./App.css";

interface HolisticProduct {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
}

const App: React.FC = () => {
  const [holisticProducts, setHolisticProducts] = useState<HolisticProduct[]>(
    []
  );
  const [ailment, setAilment] = useState("");

  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<HolisticProduct[]>(
    []
  );

  useEffect(() => {
    getHolisticProducts()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setHolisticProducts(data as HolisticProduct[]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAilmentSelect = (selectedAilment: string) => {
    setAilment(selectedAilment);

    if (selectedAilment) {
      const formattedAilment = selectedAilment.toLowerCase().trim();
      const filtered = holisticProducts.filter((holisticProduct) =>
        holisticProduct.product_type.some(
          (type) => type.toLowerCase().trim() === formattedAilment
        )
      );

      setFilteredProducts(filtered);
    } else {
      // If no ailment is selected, show all products list
      setFilteredProducts([]);
    }

    setSearchValue("");
  };

  const handleSearchInput = (value: string) => {
    const formattedValue = value.toLowerCase();
    setSearchValue(formattedValue);

    // Determine which list to filter: full product list or selected ailment subgroup
    const mainProductList = ailment
      ? holisticProducts.filter((holisticProduct) =>
          holisticProduct.product_type.some(
            (type) => type.toLowerCase().trim() === ailment.toLowerCase().trim()
          )
        )
      : holisticProducts;

    const filteredProducts = mainProductList.filter((product) =>
      product.product_title.toLowerCase().includes(formattedValue)
    );
    setFilteredProducts(filteredProducts);
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
      <Header>
        <Dropdown handleAilmentSelect={handleAilmentSelect} />
        <SearchBar
          handleSearchInput={handleSearchInput}
          searchValue={searchValue}
        />
        {searchValue && !productList.length && (
          <p className="text-red-500 font-bold text-center mt-4">
            No products match your search! Try searching by a different name.
          </p>
        )}
      </Header>
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
          <Route exact path="/payment" render={() => <PaymentPage />} />
          <Route
            exact
            path="/:id"
            render={({ match }) => (
              <HolisticProductPage
                holisticProducts={holisticProducts}
                id={Number.parseInt(match.params.id)}
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
