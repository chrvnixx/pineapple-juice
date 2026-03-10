import { XIcon } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router";

export default function Menu({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="bg-white flex flex-col items-center text-lg px-10 py-4 rounded-xl "
    >
      <XIcon size={18} className="mb-2 opacity-50" />
      <Link to="/" className="active:text-[#ffd900] hover:text-[#ffd900] ">
        Home
      </Link>
      <Link
        to="/product"
        className="active:text-[#ffd900] hover:text-[#ffd900]  "
      >
        Shop
      </Link>
    </div>
  );
}
