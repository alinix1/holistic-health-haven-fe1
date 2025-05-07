import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { HolisticProduct } from '../resources/model';
import spinner from "../assets/Yin_and_Yang.gif";

// Import lazy-loaded components
import { 
    HolisticProductList,
    HolisticProductPage,
    TestimonialsPage,
    ReviewSubmit,
    TermsAndConditions,
    PrivacyPolicy,
    CheckoutItem,
    PaymentContainer,
    PaymentSuccess,
    AboutPage,
    BadURL
  } from './LazyRoutes';

interface AppRoutesProps {
  holisticProducts: HolisticProduct[];
  productList: HolisticProduct[];
  loading: boolean;
}

// Loading component to use with Suspense
const LoadingSpinner = (): JSX.Element => (
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
  
  export const AppRoutes: React.FC<AppRoutesProps> = ({ 
    holisticProducts, 
    productList,
    loading
  }) => {
  
    if (loading) {
        return <LoadingSpinner />;
    }

        return (
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route 
                  path="/"
                  element={<HolisticProductList holisticProducts={productList} />}
                />
                <Route
                  path="/testimonials"
                  element={<TestimonialsPage />}
                />
                <Route 
                  path="/reviews" 
                  element={<ReviewSubmit />}
                />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route 
                  path="/privacy-policy" 
                  element={<PrivacyPolicy />}
                />
                <Route 
                  path="/checkout" 
                  element={<CheckoutItem />}
                />
                <Route 
                  path="/payment" 
                  element={<PaymentContainer />}
                />
                <Route
                  path="/payment-success"
                  element={<PaymentSuccess />}
                />
                <Route 
                  path="/about" 
                  element={<AboutPage />}
                />
                <Route 
                  path="/:id" 
                  element={<HolisticProductPage holisticProducts={holisticProducts} />}
                />
                <Route 
                  path="/badURL" 
                  element={<BadURL />}
                />
                <Route 
                  path="*" 
                  element={<Navigate to="/badURL" replace />}
                />
              </Routes>
            </Suspense>
          );
};

