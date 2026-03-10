import { ShoppingBagIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router";

export default function Cart({ onClose }) {
  const { cart, quantity, increaseQuantity, decreaseQuantity, removeAll } =
    useCart();

  return (
    <div className=" flex flex-col bg-white w-90 max-h-[70%]  mx-4 overflow-auto p-4 rounded-xl ">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <div onClick={onClose}>
            <XIcon className="fixed right-9" />
          </div>
          <div className="bg-[#ffd900] w-20 h-20 rounded-full flex justify-center items-center">
            <ShoppingBagIcon size={40} />
          </div>
          <p className="text-center mt-4">
            Your cart is empty, add a product to continue
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Remove all button */}
          <div className="flex  justify-between">
            <span
              onClick={() => removeAll()}
              className="hover:underline active:underline opacity-50  "
            >
              Remove all
            </span>
            <div onClick={onClose}>
              <XIcon className="fixed right-9" />
            </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="mt-8">
              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center gap-4">
                  <img src={item.image} className="w-20 h-20" alt="" />
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name} </span>
                    <span className="opacity-50">₦{item.price} </span>
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
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}

          {/* checkout button */}

          <Link to="/checkout" className="">
            <button
              onClick={onClose}
              className="bg-[#ffd900] text-center px-5 py-2 rounded-xl mt-4 w-full "
            >
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
