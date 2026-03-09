import React from "react";

export default function ConfirmationModal({ open, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center z-index-2 ${open ? "visible bg-black/30" : "invisible"}`}
    >
      {children}
    </div>
  );
}
