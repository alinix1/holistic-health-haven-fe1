import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReviewFormProps } from "../../resources/model";

const initialValues = {
  holistic_product_id: 1,
  user_name: "",
  user_review: "",
};
const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_review: Yup.string().required("Review cannot be empty"),
});
const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-[#8BA663]">
      <h1 className="text-3xl font-bold text-black mb-6">Submit a Review</h1>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label
                className="block mb-2 font-bold text-left"
                htmlFor="user_name"
              >
                Name:
              </label>
              <Field
                type="text"
                name="user_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name goes here..."
              />
              <ErrorMessage
                name="user_name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <label
                className="block mt-4 mb-2 font-bold text-left"
                htmlFor="user_review"
              >
                Review:
              </label>
              <Field
                as="textarea"
                name="user_review"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please write your review..."
              />
              <ErrorMessage
                name="user_review"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                disabled={isSubmitting}
              >
                Submit Review
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReviewForm;
