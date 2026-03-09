import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartModal from "./components/CartModal";
import Cart from "./components/Cart";
import { useState } from "react";

import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f8f8f5] ">
      <Navbar setOpen={setOpen} />

      <CartModal open={open}>
        <Cart onClose={() => setOpen(false)} setOpen={setOpen} />
      </CartModal>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
