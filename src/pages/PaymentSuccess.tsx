import type React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
const PaymentSuccess: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-[#f1ede5]">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-inter text-4xl font-bold text-black">
          Payment Success!
          <span className="ml-2 inline-block animate-bounce">🎉</span>{" "}
        </h1>
        <p className="font-inter text-base text-black">
          Thank you for your purchase.
        </p>
      </div>
      <Link to="/">
        <Button className="lowercase">Home</Button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
