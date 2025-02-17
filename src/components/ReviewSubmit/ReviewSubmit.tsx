import React from "react";
import { useHistory } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { postReview } from "../../apiCalls";
import { Review } from "../../resources/model";

const ReviewSubmit: React.FC = () => {
  const history = useHistory();

  const handleReviewSubmit = async (values: Review) => {
    try {
      await postReview(values);
      history.push("/testimonials");
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default ReviewSubmit;
