import React from "react";
import { useHistory } from "react-router-dom";
import ReviewForm from "../../pages/ReviewForm";
import { postReview } from "../../apiCalls";
import { Review } from "../../resources/model";

const ReviewSubmit: React.FC = () => {
  const history = useHistory();

  const handleReviewSubmit = async (values: Review): Promise<void> => {
    try {
      await postReview(values);
      history.push("/testimonials");
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };
  return (
    <div>
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ReviewSubmit;
