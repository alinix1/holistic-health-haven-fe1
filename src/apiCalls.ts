import { holisticProductData, reviewsData } from "./mockData";

const getHolisticProducts = () => {
  return Promise.resolve({
    json: () => Promise.resolve(holisticProductData),
    ok: true,
  });
};

const getReviews = () => {
  return Promise.resolve({
    json: () => Promise.resolve(reviewsData),
    ok: true,
  });
};

export { getHolisticProducts, getReviews };
