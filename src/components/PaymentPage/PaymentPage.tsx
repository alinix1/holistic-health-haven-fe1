import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { stateData } from "../../mockData";

const PaymentPage = () => {
  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cardDetails: "", // Eventually replaced with Stripe CardElement
  };

  const validationSchema = Yup.object({
    fullnName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalCode: Yup.string().required("Postal Code is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-[#8BA663]">
      <h1 className="text-3xl font-bold text-black mb-6">
        Complete Your Payment
      </h1>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                  {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4"> */}
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
                  {/* Stripe Payment */}
                  <p className="text-gray-500">Card details goes here.</p>
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
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Pay $54.99
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PaymentPage;
