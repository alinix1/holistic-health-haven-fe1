import type React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { CartItem } from "../../model";
import { removeItemFromCart } from "../../utils/cartUtils";
import deleteItemIcon from "../../assets/delete.svg";

interface LocationState {
  cartItems: CartItem[];
}

const CheckoutItem: React.FC = () => {
  const location = useLocation<LocationState>();
  const [cartItems, setCartItems] = useState<CartItem[]>(
    location.state?.cartItems || []
  );

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleDeleteItem = (itemId: number) => {
    const updatedCartItems = removeItemFromCart(cartItems, itemId);
    setCartItems(updatedCartItems);
  };

  const handleProceedToPayment = (values: { shippingAddress: string }) => {
    console.log("Proceeding to payment with:", {
      cartItems,
      shippingAddress: values.shippingAddress,
    });
  };

  const validationSchema = Yup.object({
    shippingAddress: Yup.string()
      .required("Shipping address is required")
      .min(10, "Shipping address must be at least 10 characters"),
  });

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {/* Cart Items */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img
                      src={deleteItemIcon}
                      alt="delete item"
                      className="w-5 h-5 mr-3 cursor-pointer hover:opacity-80"
                      onClick={() => handleDeleteItem(item.id)}
                    />
                  </div>
                  <span>
                    {item.quantity} x {item.product_title}
                  </span>
                  <span className="font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4 text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty</p>
        )}
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={{ shippingAddress: "" }}
        validationSchema={validationSchema}
        onSubmit={handleProceedToPayment}
      >
        {() => (
          <Form className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

            {/* Shipping Address Field */}
            <div className="mb-4">
              <label
                htmlFor="shippingAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Shipping Address
              </label>
              <Field
                name="shippingAddress"
                id="shippingAddress"
                type="text"
                placeholder="Enter your shipping address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="shippingAddress"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Proceed to Payment Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700"
            >
              Proceed to Payment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutItem;
