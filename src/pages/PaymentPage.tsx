import type React from "react";
import { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { stateData } from "../utils";
import { useCartTotal, useCart } from "../hooks/useCart";
import Button from "../components/Button/Button";
import type { PaymentFormValues, PaymentPageProps } from "../resources/model";

const PaymentPage: React.FC<PaymentPageProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const total = useCartTotal();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSucceeded, setPaymentSucceeded] = useState<boolean>(false);

  const initialValues: PaymentFormValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalCode: Yup.string()
      .matches(/^\d{5}$/, "Invalid postal code")
      .required("Postal Code is required"),
  });

  const handleSubmit = useCallback(
    async (values: PaymentFormValues) => {
      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        return;
      }

      // confirm payment using Stripe's CardElement
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: values.fullName,
            email: values.email,
            address: {
              line1: values.address,
              city: values.city,
              state: values.state,
              postal_code: values.postalCode,
            },
          },
        },
      });

      if (error) {
        console.error("Payment error:", error);
        setPaymentError(error.message || "Payment failed");
        setPaymentSucceeded(false);
      } else {
        setPaymentError(null);
        setPaymentSucceeded(true);

        navigate("/payment-success");
      }
    },
    [stripe, elements, clientSecret, navigate],
  );

  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] px-4 py-4 md:py-10">
      <h1 className="font-inter mb-6 text-3xl font-bold text-black">
        Complete Your Payment
      </h1>
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              {/* Billing Information */}
              <section className="mb-6">
                <h2 className="font-inter mb-4 text-xl font-semibold text-gray-700">
                  Billing Information
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="city"
                      type="text"
                      placeholder="City"
                      className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <Field
                    as="select"
                    name="state"
                    id="state"
                    className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" label="Select your state" />
                    {stateData.map((state) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </Field>
                  <div>
                    <Field
                      name="postalCode"
                      type="text"
                      placeholder="ZIP/Postal Code"
                      className="font-inter w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Information */}
              <section className="mb-6">
                <h2 className="font-inter mb-4 text-xl font-semibold text-gray-700">
                  Payment Details
                </h2>
                <div className="font-inter w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                      hidePostalCode: true,
                    }}
                  />
                </div>
              </section>

              {/* Order Summary */}
              <section className="mb-6">
                <h2 className="font-inter mb-4 text-xl font-semibold text-gray-700">
                  Order Summary
                </h2>
                <div className="flex items-start justify-between">
                  <span className="font-inter text-gray-600">Product Name</span>
                  <ul className="list-disc pl-4">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="font-inter text-left font-medium text-gray-800"
                      >
                        {item.product_title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between border-t py-2">
                  <span className="font-inter text-lg font-semibold">
                    Total
                  </span>
                  <span className="font-inter text-lg font-semibold text-gray-800">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </section>
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !(dirty || isValid) || total === 0}
                className="w-full"
              >
                Pay
                {total > 0 ? ` $${total.toFixed(2)}` : ""}
              </Button>
              {total === 0 && (
                <div className="mt-2 text-center text-red-500">
                  Your cart is empty. Please add items before proceeding to
                  payment.
                </div>
              )}
              {paymentError && (
                <div className="mt-2 text-red-500">{paymentError}</div>
              )}
              {paymentSucceeded && (
                <div className="font-inter mt-2 text-green-500">
                  Payment succeeded!
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PaymentPage;
