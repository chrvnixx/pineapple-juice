import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";

export default function Cart({ onClose }) {
  const { cart, quantity, increaseQuantity, decreaseQuantity, total } =
    useCart();

  return (
    <div className="relative flex flex-col bg-white w-90 max-h-[70%]  mx-4 overflow-auto p-4 rounded-xl ">
      <XIcon onClick={onClose} className="fixed right-8" />
      {cart.map((item) => (
        <div key={item.id} className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center gap-4">
              <img src={item.image} className="w-20 h-20" alt="" />
              <div className="flex flex-col">
                <span className="font-bold">{item.name} </span>
                <span className="opacity-50">${item.price} </span>
              </div>
            </div>

            {/* increase/decrease buttons */}
            <div className="flex bg-[#c4e2ff]/30 h-10 text-[18px] items-center rounded-xl mt-2 text-black/50">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className=" px-2 "
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className=" px-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <span className="text-[18px] opacity-50 ">Total</span>
            <span>${item.price * item.quantity}</span>
          </div>
        </div>
      ))}

      {/* checkout button */}
      <button className="bg-[#ffd900] px-5 py-2 rounded-xl mt-4 ">
        Checkout
      </button>
    </div>
  );
}
