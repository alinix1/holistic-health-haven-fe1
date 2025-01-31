import axios from "axios";

const API_BASE_URL = "http://localhost:9000/api/v1";

const getHolisticProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching holistic products", error);
    throw error;
  }
};

const getReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews", error);
    throw error;
  }
};

export { getHolisticProducts, getReviews };
