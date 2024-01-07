import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import HolisticProductList from "../HolisticProductList/HolisticProducList";
import HolisticProductPage from "../HolisticProductPage/HolisticProductPage";
import TestimonialsPage from "../TestimonialsPage/TestimonialsPage";
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

  const [loading, setLoading] = useState(true);

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
      <Header />
      <main className="App flex-grow">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HolisticProductList holisticProducts={holisticProducts} />
            )}
          />
          <Route
            exact
            path="/testimonials"
            render={() => <TestimonialsPage />}
          />
          <Route
            exact
            path="/:id"
            render={({ match }) => (
              <HolisticProductPage
                holisticProducts={holisticProducts}
                id={parseInt(match.params.id)}
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
