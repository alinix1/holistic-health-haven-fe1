import React, { useState, useEffect } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "../../pages/PaymentPage";
import { getStripePublishableKey, createPaymentIntent } from "../../apiCalls";
import spinner from "../../assets/Yin_and_Yang.gif";

const PaymentContainer: React.FC = () => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    const fetchPublishableKey = async (): Promise<void> => {
      try {
        const key = await getStripePublishableKey();
        setStripePromise(loadStripe(key));
      } catch (error) {
        console.error("Error fetching Stripe publishable key", error);
      }
    };
    fetchPublishableKey();
  }, []);

  useEffect(() => {
    const createIntent = async (): Promise<void> => {
      try {
        const data = await createPaymentIntent({ amount: 2000 });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent", error);
      }
    };

    createIntent();
  }, []);

  return (
    <div>
      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentPage clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div className="flex items-center justify-center">
          <img
            src={spinner}
            className="w-20 h-20"
            alt="loading spinner Yin & Yang"
          />
        </div>
      )}
    </div>
  );
};

export default PaymentContainer;
