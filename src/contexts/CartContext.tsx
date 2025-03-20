import React, { createContext, useReducer, ReactNode } from "react";
import type { CartState, HolisticProduct } from "../resources/model";

type CartAction =
  | { type: "ADD_ITEM"; payload: HolisticProduct }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number };

export interface CartContextProps extends CartState {
  dispatch: React.Dispatch<CartAction>;
}

const initialState: CartState = {
  cartItems: [],
};

const decreaseItemQuantity = (cartItems: HolisticProduct[], id: number) => {
  return cartItems
    .map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 0) - 1 } : item,
    )
    .filter((item) => (item.quantity || 0) > 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
              : cartItem,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
    case "DECREASE_QUANTITY": {
      const id = action.payload;
      return {
        cartItems: decreaseItemQuantity(state.cartItems, id),
      };
    }
    case "INCREASE_QUANTITY": {
      const id = action.payload;
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item,
        ),
      };
    }
    case "DECREASE_QUANTITY": {
      const id = action.payload;
      return {
        cartItems: state.cartItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) }
              : item,
          )
          .filter((item) => item.quantity || 0 > 0),
      };
    }
    default:
      return state;
  }
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
