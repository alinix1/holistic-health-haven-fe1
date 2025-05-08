import type {
  Review,
  HolisticProduct,
  PaymentPageProps,
} from "./resources/model";

const API_BASE_URL = "http://localhost:9000/api/v1";

// Helper function to handle responses
const handleResponse = async <T> (response: Response): Promise<T> => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
  }
  return response.json();
};

/**
 * Get optimized image URL
 * @param source - 'db' or 'static'
 * @param id - Image ID or filename
 * @param width - Desired width in pixels
 * @param quality - Image quality (1-100)
 * @returns URL to the optimized image
 */
const getOptimizedImageUrl = (
  source: 'db' | 'static',
  id: string | number,
  width = 800,
  quality = 80
): string => {
  return `${API_BASE_URL}/images/optimize?source=${source}&id=${id}&width=${width}&quality=${quality}`;
};


const getHolisticProducts = async (): Promise<HolisticProduct[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching holistic products", error);
    throw error;
  }
};

const getReviews = async (): Promise<Review[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching reviews", error);
    throw error;
  }
};

const postReview = async (newReview: Review): Promise<Review> => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error posting review", error);
    throw error;
  }
};

const getStripePublishableKey = async (): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/stripe/config`);
    const data = await handleResponse<{ publishableKey: string}>(response);
    return data.publishableKey;
  } catch (error) {
    console.error("Error fetching Stripe publishable key", error);
    throw error;
  }
};

const createPaymentIntent = async (payload: {
  amount: number;
}): Promise<PaymentPageProps> => {
  try {
    const response = await fetch(`${API_BASE_URL}/stripe/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await handleResponse(response);
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
  getOptimizedImageUrl

};

