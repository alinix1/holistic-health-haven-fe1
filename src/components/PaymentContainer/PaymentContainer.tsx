import type React from "react";
import { useState, useEffect } from "react";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "../../pages/PaymentPage";
import { useCartTotal } from "../../hooks/useCart";
import { getStripePublishableKey, createPaymentIntent } from "../../apiCalls";

const PaymentContainer: React.FC = () => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const total = useCartTotal();

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
        const amountInCents = Math.max(50, Math.round(total * 100));
        const data = await createPaymentIntent({ amount: amountInCents });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent", error);
      } finally {
        setLoading(false);
      }
    };
    if (stripePromise) {
      createIntent();
    }
  }, [total, stripePromise]);

  if (loading) {
    return (
      <div className="mt-20 flex h-full flex-col items-center justify-center">
        <div className="spinner"></div>
        <h4 className="mt-4">...Please wait for the page to load fully.</h4>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret }}
      key={clientSecret}
    >
      <PaymentPage clientSecret={clientSecret} />
    </Elements>
  );
};

export default PaymentContainer;
