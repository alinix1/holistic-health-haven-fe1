import type React from "react";
import { useLocation } from "react-router-dom";
import type { CartItem } from "../../model";

interface LocationState {
  cartItems: CartItem[];
}

const CheckoutItem: React.FC = () => {
  const location = useLocation<LocationState>();
  const cartItems = location.state?.cartItems || [];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.product_title} - $
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CheckoutItem;
