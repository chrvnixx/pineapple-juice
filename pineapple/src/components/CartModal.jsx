import React from "react";

export default function CartModal({ open, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-2  ${open ? "visible bg-black/30 " : "invisible"}`}
    >
      {children}
    </div>
  );
}
