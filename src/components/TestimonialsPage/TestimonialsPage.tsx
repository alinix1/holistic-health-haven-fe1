import React, { useState, useEffect } from "react";
import { getReviews } from "../../apiCalls";

interface Review {
  id: number;
  holistic_product_id: number;
  user_name: string;
  user_review: string;
}

const TestimonialsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews data");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data as Review[]);
      })
      .catch((error) => {
        console.error("Error fetching reviews data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>User: {review.user_name}</p>
            <p>Comment: {review.user_review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsPage;
