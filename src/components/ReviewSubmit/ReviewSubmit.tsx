import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from "../../pages/ReviewForm";
import { postReview } from "../../apiCalls";
import { Review } from "../../resources/model";

const ReviewSubmit: React.FC = () => {
  const navigate = useNavigate();

  const handleReviewSubmit = async (values: Review): Promise<void> => {
    try {
      await postReview(values);
      navigate("/testimonials");
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };
  return <ReviewForm onSubmit={handleReviewSubmit} />;
};

export default ReviewSubmit;
