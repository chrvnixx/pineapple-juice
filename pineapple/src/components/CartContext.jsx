import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  function addProduct(product) {
    const existingItem = setCart((prevCart) => {
      prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...product, { ...item, quantity: quantity }];
    });
  }
  <CartContext.Provider value={{ addProduct, cart, quantity }}>
    {children}
  </CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
