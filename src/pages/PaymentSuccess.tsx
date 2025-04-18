import type React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f1ede5] flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl text-black font-inter text-4xl font-bold">
        Payment Success!
        <span className="inline-block ml-2 animate-bounce">🎉</span>{" "}
      </h1>
      <p className="text-black text-normal font-inter">
        Thank you for your purchase.
      </p>
      <Link to="/" className="bottom-0 left-0">
        <Button className="mt-4 md:mt-0 lowercase">Home</Button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
