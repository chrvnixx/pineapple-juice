import React, { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subTotal = cart.reduce((sum, item) => {
      sum + Number(item.price);
    }, 0);
    setTotal(subTotal);
  }, [cart]);
  return (
    <div className="p-4">
      <h2 className="text-center text-[20px] font-bold ">Checkout</h2>
      <div className="flex justify-between mt-8">
        <h2 className="text-[20px] font-bold ">Order Summary</h2>
        <span className="text-[12px] bg-[#ffd900]/20 py-1 px-2 rounded-xl">
          3 Items
        </span>
      </div>

      <div>
        {cart.map((item) => (
          <div>
            <div
              className="bg-white mt-4 rounded-xl shadow-lg p-4"
              key={item.id}
            >
              <div className="flex gap-6">
                <div className="rounded-xl overflow-hidden">
                  <img className="w-20 h-20" src={item.image} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold ">{item.name}</span>
                  <span className="opacity-50 ">Qty:{item.quantity}</span>
                  <span className="text-[16px] text-[#ffd900] font-bold ">
                    ₦{item.price}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <span className="text-[14px] opacity-50 ">Subtotal</span>
                <span>{console.log(total)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
