import { persistentMap } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Map where the key is the product ID and the value is the CartItem object
export const cartItems = persistentMap<Record<string, CartItem>>(
  'cart:',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export function addCartItem({ id, name, price, image }: Omit<CartItem, 'quantity'>) {
  const existingItem = cartItems.get()[id];
  if (existingItem) {
    cartItems.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(id, {
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  }
}

export function removeCartItem(id: string) {
  const items = { ...cartItems.get() };
  delete items[id];
  cartItems.set(items);
}

export function getCartTotal() {
  return Object.values(cartItems.get()).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export function getCartItemCount() {
  return Object.values(cartItems.get()).reduce(
    (count, item) => count + item.quantity,
    0
  );
}
