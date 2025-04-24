import { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import type { CartContextProps } from "../contexts/CartContext";

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const useCartTotal = (): number => {
  const context = useContext(CartContext);
  return useMemo(() => {
    return (
      context?.cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0,
      ) || 0
      
    );
  }, [context?.cartItems]);
};
