import type React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useCart, useCartTotal } from "../hooks/useCart";

const CheckoutItem: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, dispatch } = useCart();

  const total = useCartTotal();
  const handleProceedToPayment = (): void => {
    navigate("/payment");
  };

  const handleRemoveItem = (id: number): void => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleIncreaseItem = (id: number): void => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleDecreaseItem = (id: number): void => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  return (
    <div className="bg-gray-100 p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-3xl text-black font-inter font-bold mb-6">
        Checkout
      </h1>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        {cartItems.length > 0 ? (
          <>
            {/* List each cart item */}
            <ul className="space-y-4 font-inter font-bold">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-1"
                      onClick={() => handleIncreaseItem(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                    <span className="mr-4 font-inter font-semibold">
                      {item.quantity} x
                    </span>
                    <button
                      className="p-1"
                      onClick={() => handleDecreaseItem(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <span className="font-medium">{item.product_title}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-inter font-semibold">
                      ${Number(item.price).toFixed(2)}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <span className="text-xl font-inter font-bold">Grand Total:</span>
              <span className="text-xl font-inter font-bold">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Proceed to Payment Button */}
            <Button
              type="submit"
              className="w-2/3 mt-4"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </Button>
          </>
        ) : (
          <p className="text-center font-inter text-gray-600">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutItem;
