import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import HolisticProductList from "../HolisticProductList/HolisticProducList";
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="App">
        <Route
          path="/"
          render={() => (
            <HolisticProductList holisticProducts={holisticProducts} />
          )}
        />
      </main>
    </div>
  );
};

export default App;
