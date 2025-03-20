import axios from "axios";
import { Review, HolisticProduct, PaymentPageProps } from "./resources/model";

const API_BASE_URL = "http://localhost:9000/api/v1";

const getHolisticProducts = async (): Promise<HolisticProduct[]> => {
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

const postReview = async (newReview: Review): Promise<Review> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reviews`, newReview);
    return response.data;
  } catch (error) {
    console.error("Error posting review", error);
    throw error;
  }
};

const getStripePublishableKey = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stripe/config`);
    return response.data.publishableKey;
  } catch (error) {
    console.error("Error fetching Stripe publishable key", error);
    throw error;
  }
};

const createPaymentIntent = async (payload: { amount: number }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/stripe/create-payment-intent`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating payment intent", error);
    throw error;
  }
};

export {
  getHolisticProducts,
  getReviews,
  postReview,
  getStripePublishableKey,
  createPaymentIntent,
};
