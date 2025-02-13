import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Review, ReviewFormProps } from "../../resources/model";

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        id: Date.now(),
        holistic_product_id: 1,
        user_name: "",
        user_review: "",
      }}
      validationSchema={Yup.object({
        user_name: Yup.string().required("Name is required"),
        user_review: Yup.string().required("Review cannot be empty"),
      })}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <label className="mb-2 font-bold" htmlFor="name">
            Name:
          </label>
          <Field
            type="text"
            name="user_name"
            className="border p-2 rounded-md"
            placeholder="Your Name"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          <label className="mt-4 mb-2 font-bold" htmlFor="review">
            Review:
          </label>
          <Field
            as="textarea"
            name="user_review"
            className="border p-2 rounded-md"
            placeholder="Write your review..."
          />
          <ErrorMessage
            name="review"
            component="div"
            className="text-red-500"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            Submit Review
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;
