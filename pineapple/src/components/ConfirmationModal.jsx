import React from "react";

export default function ConfirmationModal({ openThanks, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-2 ${openThanks ? "visible bg-black/30" : "invisible"}`}
    >
      {children}
    </div>
  );
}
