import React, { useState, useEffect } from "react";
import { getReviews } from "../../apiCalls";
import type { Review } from "../../resources/model";
import holisticHerbalImage from "../../assets/holistic_herbal.jpg";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const TestimonialsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [localReviews, setLocalReviews] = useLocalStorage<Review[]>(
    "reviews",
    [],
  );

  useEffect(() => {
    getReviews()
      .then((data) => {
        setReviews(data);
        setLocalReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setReviews(localReviews);
      });
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen flex flex-col items-center justify-center text-black overflow-y-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${holisticHerbalImage})`,
      }}
    >
      <h2 className="text-3xl mb-2 font-extrabold">Testimonials</h2>
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
              {review.user_review.split(". ").map((sentence) => (
                <React.Fragment key={sentence}>
                  <br />
                  {sentence}
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
