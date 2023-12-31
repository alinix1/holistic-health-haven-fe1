import React, { useState, useEffect } from "react";
import { getReviews } from "../../apiCalls";
import holisticHerbalImage from "../../assets/holistic_herbal.jpg";

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
    <div
      className="bg-cover bg-center bg-fixed h-screen flex flex-col items-center justify-center text-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${holisticHerbalImage})`,
      }}
    >
      <h2 className="text-3xl mb-4 font-extrabold">Testimonials</h2>
      <ul className="text-center">
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 text-left">
            <p className="font-bold text-lg">
              <span
                className="text-gray-200 font-sans"
                style={{ fontSize: "5em" }}
              >
                &#8220;
              </span>
              {review.user_name}
            </p>
            <p className="text-xl">
              {review.user_review.split(". ").map((sentence, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {index === 0 ? `${sentence}.` : sentence}
                </React.Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsPage;
