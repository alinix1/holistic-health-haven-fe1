import axios from "axios";

const API_BASE_URL = "http://localhost:9000/api/v1";

const getHolisticProducts = () => {
  return axios
    .get(`${API_BASE_URL}/products`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching holistic products", error);
      throw error;
    });
};

const getReviews = () => {
  return axios
    .get(`${API_BASE_URL}/reviews`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching reviews", error);
      throw error;
    });
};

export { getHolisticProducts, getReviews };
