import type React from "react";
import { useState, useEffect } from "react";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "../../pages/PaymentPage";
import { useCartTotal } from '../../hooks/useCart';
import { getStripePublishableKey, createPaymentIntent } from "../../apiCalls";
import spinner from "../../assets/Yin_and_Yang.gif";

const PaymentContainer: React.FC = () => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const total = useCartTotal()

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

  // Memoize the Elements component to prevent unnecessary re-creation
  const memoizedElements = useMemo(() => {
    if (!stripePromise || !clientSecret) return null;

    return (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentPage clientSecret={clientSecret} />
      </Elements>
    );
  }, [stripePromise, clientSecret]);

  return (
    <div>
      {memoizedElements || (
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
