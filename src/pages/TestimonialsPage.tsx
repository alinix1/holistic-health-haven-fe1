import type React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../apiCalls";
import type { Review } from "../resources/model";
import holisticHerbalImage from "../assets/holistic_herbal.jpg";

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
      className="flex min-h-screen flex-col items-center justify-center overflow-y-auto bg-cover bg-fixed bg-center text-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${holisticHerbalImage})`,
      }}
    >
      <h2 className="font-inter mb-2 text-3xl font-extrabold">Testimonials</h2>
      <ul className="text-center">
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 text-left">
            <p className="font-inter text-md font-bold md:text-xl">
              <span
                className="mr-2 text-4xl text-gray-400"
                aria-hidden="true"
                style={{ fontSize: "5em" }}
              >
                &#8220;
              </span>
              {review.user_name}
            </p>
            <p className="text-md font-jakarta font-semibold text-gray-700 md:text-xl">
              {review.user_review}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsPage;
