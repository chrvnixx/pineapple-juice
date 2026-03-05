import { XIcon } from "lucide-react";
import React from "react";

export default function Cart({ onClose }) {
  return (
    <div className="bg-white w-90 h-70 mx-4 ">
      <XIcon onClick={onClose} className="float-right" />
      <button className="bg-[#ffd900] px-5 py-2 rounded-xl ">Checkout</button>
    </div>
  );
}
