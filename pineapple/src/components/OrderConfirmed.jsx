import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function OrderConfirmed({ onClose }) {
  return (
    <div className="bg-white p-4 rounded-xl w-full  mx-4 flex flex-col justify-center items-center ">
      <div className="w-15 h-15 bg-[#ffd900] rounded-full flex justify-center items-center ">
        <Check weight="fill" size={32} />
      </div>

      <h2 className="text-[28px] font-bold mt-4 text-center  ">
        Order Confirmed
      </h2>

      <p className="opacity-50 text-center">
        Thank you for your order, you'll be contacted soon
      </p>

      <Link to="/">
        <button
          onClick={onClose}
          className="bg-[#ffd900] py-3 px-6  rounded-xl mt-4 font-semibold"
        >
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
