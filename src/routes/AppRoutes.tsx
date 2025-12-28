import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import type { HolisticProduct } from "../resources/model";

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
  BadURL,
} from "./LazyRoutes";

interface AppRoutesProps {
  holisticProducts: HolisticProduct[];
  productList: HolisticProduct[];
  loading: boolean;
}

// Loading component to use with Suspense
const LoadingSpinner = (): JSX.Element => (
  <div className="mt-20 flex h-full flex-col items-center justify-center">
    <div className="spinner"></div>
  </div>
);

export const AppRoutes: React.FC<AppRoutesProps> = ({
  holisticProducts,
  productList,
  loading,
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
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/reviews" element={<ReviewSubmit />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/checkout" element={<CheckoutItem />} />
        <Route path="/payment" element={<PaymentContainer />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/:id"
          element={<HolisticProductPage holisticProducts={holisticProducts} />}
        />
        <Route path="/badURL" element={<BadURL />} />
        <Route path="*" element={<Navigate to="/badURL" replace />} />
      </Routes>
    </Suspense>
  );
};
