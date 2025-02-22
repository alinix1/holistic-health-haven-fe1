import React, { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { stateData } from "../../mockData";
import { PaymentFormValues, PaymentPageProps } from "../../resources/model";

const PaymentPage: React.FC<PaymentPageProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
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
  // TODO: fix validation
  // const validationSchema = Yup.object({
  //   fullName: Yup.string().required("Full Name is required"),
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   address: Yup.string().required("Address is required"),
  //   city: Yup.string().required("City is required"),
  //   state: Yup.string().required("State is required"),
  //   postalCode: Yup.string()
  //     .matches(/^\d{5}$/, "Invalid postal code")
  //     .required("Postal Code is required"),
  //   cardNumber: Yup.string()
  //     .matches(/^\d{16}$/, "Card number must be 16 digits")
  //     .required("Card number is required"),
  //   expiryDate: Yup.string()
  //     .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "MM/YY format required")
  //     .required("Expiry date is required"),
  //   cvv: Yup.string()
  //     .matches(/^\d{3,4}$/, "Invalid CVV")
  //     .required("CVV is required"),
  //   cardholderName: Yup.string().required("Cardholder name is required"),
  // });

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
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-[#8BA663]">
      <h1 className="text-3xl font-bold text-black mb-6">
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
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Billing Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Payment Details
                </h2>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none">
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
                    }}
                  />
                </div>
              </section>

              {/* Order Summary */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Product Name</span>
                  <span className="text-gray-800 font-medium">$54.99</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold text-gray-800">
                    $54.99
                  </span>
                </div>
              </section>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !(dirty || isValid)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Pay $54.99
              </button>

              {paymentError && (
                <div className="text-red-500 mt-2">{paymentError}</div>
              )}
              {paymentSucceeded && (
                <div className="text-green-500 mt-2">Payment succeeded!</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PaymentPage;
