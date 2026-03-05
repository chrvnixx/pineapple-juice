import React from "react";
import { useCart } from "./CartContext";

export default function CheckoutButtons({ onClick }) {
  const { quantity, setQuantity } = useCart();

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex gap-4">
      <div className="flex bg-[#c4e2ff]/30 h-10 text-[18px] items-center rounded-xl mt-2 text-black/50">
        <button onClick={handleDecrease} className=" px-3 ">
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className=" px-3">
          +
        </button>
      </div>

      <button
        onClick={onClick}
        className="bg-[#ffd900] py-2 px-4 rounded-xl mt-2 "
      >
        Add to cart
      </button>
    </div>
  );
}
