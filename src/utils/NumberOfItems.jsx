import { useCart } from "../context/CartContext";

export function NumberOfItems() {
  const { state } = useCart();
  const numberOfItems = state.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return <div>{numberOfItems}</div>;
}
