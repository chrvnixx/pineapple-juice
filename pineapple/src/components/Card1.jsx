import React from "react";

export default function Card1({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white w-87 h-50 border border-[#ffd900]/20 flex flex-col items-center mt-4 rounded-xl ">
      <div className="bg-[#ffd900]/20 w-14 h-14 rounded-full flex justify-center items-center mt-6 ">
        <Icon size={40} weight="fill" color="#ffd900" />
      </div>
      <h3 className="text-[18px] font-semibold mt-2">{title}</h3>
      <p className="text-[14px] opacity-50 mx-8 text-center mt-2">{desc}</p>
    </div>
  );
}
