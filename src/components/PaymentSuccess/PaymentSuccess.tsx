import React from "react";
import { Link } from "react-router-dom";
const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Payment Success! 🎉</h1>
      <p>Thank you for your purchase.</p>
      <Link to="/" className="mt-4 text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
