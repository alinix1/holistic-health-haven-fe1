import type { HolisticProduct, CartItem } from "../model";

export const mapHolisticProductToCartItem = (
  product: HolisticProduct
): CartItem => ({
  id: product.id,
  product_title: product.product_title,
  price: product.price,
  quantity: product.quantity || 1,
});

export const removeItemFromCart = (
  cartItems: CartItem[],
  itemId: number
): CartItem[] => {
  return cartItems.filter((item) => item.id !== itemId);
};
