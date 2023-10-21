import { useUserCtx } from "../UserContext";

function useCart(product) {
  const { cart, setCart } = useUserCtx();
  const addToCart = () => {
    cart.findIndex((c) => c.id === product.id) >= 0
      ? setCart(cart.filter((c) => c.id !== product.id))
      : setCart((cart) => [...cart, product]);
  };
  const addToCartText =
    cart.findIndex((c) => c.id === product.id) >= 0
      ? "Удалить из корзины"
      : "Добавить в корзину";
  return { addToCart, addToCartText };
}

export default useCart;
