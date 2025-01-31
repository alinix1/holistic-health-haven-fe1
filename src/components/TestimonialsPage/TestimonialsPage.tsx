import React, { useState, useEffect } from "react";
import { getReviews } from "../../apiCalls";
import type { Review } from "../../model";
import holisticHerbalImage from "../../assets/holistic_herbal.jpg";

const TestimonialsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews()
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
                className="text-gray-400 font-serif text-4xl mr-2"
                aria-hidden="true"
                style={{ fontSize: "5em" }}
              >
                &#8220;
              </span>
              {review.user_name}
            </p>
            <p className="text-xl font-semibold text-gray-700">
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
