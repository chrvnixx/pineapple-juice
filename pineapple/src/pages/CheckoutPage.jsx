import React, { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import { ArrowRightIcon, CopyIcon, InfoIcon, Landmark } from "lucide-react";

export default function CheckoutPage({ setOpenThanks }) {
  const { cart, setCart } = useCart();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subTotal = cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    setTotal(subTotal);
  }, [cart]);

  const shippingFee = (total * 10) / 100;

  const grandTotal = shippingFee + total;

  function handleSubmit(e) {
    e.preventDefault();
    setOpenThanks(true);
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-[20px] font-bold ">Checkout</h2>
      <div className="flex justify-between mt-8">
        <h2 className="text-[20px] font-bold ">Order Summary</h2>
        <span className="text-[12px] bg-[#ffd900]/20 py-1 px-2 rounded-xl">
          {cart.length} Item(s)
        </span>
      </div>

      <div>
        <div>
          <div className="bg-white mt-4 rounded-xl shadow-lg p-4 flex flex-col gap-8">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 ">
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
            ))}
          </div>
        </div>

        <div className="bg-white flex flex-col p-4 gap-4 rounded-xl mt-8">
          <div className="flex justify-between">
            <span className="text-[14px] opacity-50 ">Subtotal</span>
            <span> ₦{total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[14px] opacity-50 ">Shipping</span>
            <span> ₦{shippingFee}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[18px] opacity-50 font-bold ">Total</span>
            <span className="text-[18px] text-[#ffd900] "> ₦{grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Coustomer form/details */}
      <div>
        <h2 className="text-[20px] font-bold mt-8 ">Customer Details</h2>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px]">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="border border-[#E2E8F0] bg-white h-12 rounded-lg pl-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px]">Home Address</label>
            <input
              type="text"
              placeholder="No24 lincoln street, lafiaji "
              required
              className="border border-[#E2E8F0] bg-white h-12 rounded-lg pl-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px]">Phone Number</label>
            <input
              type="text"
              placeholder="+234 123 4567 890"
              required
              className="border border-[#E2E8F0] bg-white h-12 rounded-lg pl-3"
            />
          </div>
          {/* Payment */}

          <div className="mt-8">
            <div className="flex gap-2">
              <h2 className="text-[20px] font-bold ">Payment</h2>
              <Landmark size={32} weight="fill" color="#ffd900" />
            </div>

            <div className="bg-[#ffd900]/5 border-2 border-[#ffd900]/30 p-5 mt-4 rounded-xl ">
              <h3 className="text-[18px] font-bold ">
                Payment via Bank Transfer
              </h3>
              <p className="text-gray-500 text-[14px]">
                Please transfer the total amount of{" "}
                <span className="font-bold text-black "> ₦{grandTotal}</span> to
                the business account below to complete your order.
              </p>
              <div>
                {/* account name */}
                <div className="flex flex-col mt-4 gap-1">
                  <span className="text-[10px] opacity-50 ">ACCOUNT NAME</span>
                  <div className="flex justify-between">
                    <span className="text-[16px] font-bold ">
                      Major Drinks Ltd
                    </span>
                    <CopyIcon size={15} className="opacity-50" />
                  </div>
                </div>

                {/* account number */}
                <div className="flex flex-col mt-4 gap-1">
                  <span className="text-[10px] opacity-50 ">
                    ACCOUNT NUMBER
                  </span>
                  <div className="flex justify-between">
                    <span className="text-[16px] font-bold ">1234567890</span>
                    <CopyIcon size={15} className="opacity-50" />
                  </div>
                </div>

                <div className="flex flex-col mt-4 gap-1">
                  <span className="text-[10px] opacity-50 ">BANK NAME</span>
                  <div className="flex justify-between">
                    <span className="text-[16px] font-bold ">Opay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#F1F5F9] flex mt-4 gap-4 p-3 opacity-60">
            <InfoIcon size={25} />
            <p className="text-[12px] ">
              Processing usually takes few minutes. Your order will be shipped
              once payment is confirmed.
            </p>
          </div>

          <button className="flex items-center justify-center bg-[#ffd900] text-[16px] font-bold py-4 rounded-xl">
            Confirm Order
            <ArrowRightIcon size={20} className="mt-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
