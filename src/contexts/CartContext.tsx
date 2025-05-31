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

const loadCartFromStorage = (): HolisticProduct[] => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart", error);
    return [];
  }
};

const saveCartToStorage = (cartItems: HolisticProduct[]): void => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart", error);
  }
};

const initializeState = (): CartState => ({
  cartItems: loadCartFromStorage(),
});

const decreaseItemQuantity = (
  cartItems: HolisticProduct[],
  id: number,
): HolisticProduct[] => {
  return cartItems
    .map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 0) - 1 } : item,
    )
    .filter((item) => (item.quantity || 0) > 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;

  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        newState = {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
              : cartItem,
          ),
        };
      } else {
        newState = {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
      break;
    }
    case "REMOVE_ITEM":
    case "DECREASE_QUANTITY": {
      const id = action.payload;
      newState = {
        cartItems: decreaseItemQuantity(state.cartItems, id),
      };
      break;
    }
    case "INCREASE_QUANTITY": {
      const id = action.payload;
      newState = {
        cartItems: state.cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item,
        ),
      };
      break;
    }
    default:
      return state;
  }

  saveCartToStorage(newState.cartItems);
  return newState;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, undefined, initializeState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
