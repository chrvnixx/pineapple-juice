import React from "react";

export default function MenuModal({ openMenu, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center -mt-105  z-2 ${openMenu ? " visible bg-black/30" : "invisible"}`}
    >
      {children}
    </div>
  );
}
