import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const oldCart = localStorage.getItem("storeCart");

export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(oldCart) || []);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cart));
  }, [cart]);

  function addProduct(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: quantity }];
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : "",
      );
    });
  }

  function decreaseQuantity(id) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function removeAll() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        quantity,
        setQuantity,
        cart,
        increaseQuantity,
        decreaseQuantity,
        total,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
