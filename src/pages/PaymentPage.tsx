import type React from "react";
import { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { stateData } from "../mockData";
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
    cardNumber: "",
    expireDate: "",
    cvv: "",
    cardholderName: "",
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

        history.push("/payment-success");
      }
    },
    [stripe, elements, clientSecret, history],
  );

  return (
    <div className="flex flex-col items-center py-4 px-2 md:py-10 px-4 bg-[#F5F5F5]">
      <h1 className="text-3xl font-inter font-bold text-black mb-6">
        Complete Your Payment
      </h1>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              {/* Billing Information */}
              <section className="mb-6">
                <h2 className="text-xl font-inter font-semibold text-gray-700 mb-4">
                  Billing Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <Field
                    as="select"
                    name="state"
                    id="state"
                    className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full font-inter px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Information */}
              <section className="mb-6">
                <h2 className="text-xl font-inter font-semibold text-gray-700 mb-4">
                  Payment Details
                </h2>
                <div className="w-full font-inter px-4 py-3 border border-gray-300 rounded-lg focus:outline-none">
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
                <h2 className="text-xl font-inter font-semibold text-gray-700 mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between items-start">
                  <span className="font-inter text-gray-600">Product Name</span>
                  <ul className="list-disc pl-4">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="text-gray-800 font-inter text-left font-medium"
                      >
                        {item.product_title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-lg font-inter font-semibold">
                    Total
                  </span>
                  <span className="text-lg font-inter font-semibold text-gray-800">
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

              {paymentError && (
                <div className="text-red-500 mt-2">{paymentError}</div>
              )}
              {paymentSucceeded && (
                <div className="text-green-500 font-inter mt-2">
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
