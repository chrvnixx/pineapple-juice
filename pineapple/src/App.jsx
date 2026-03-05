import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartModal from "./components/CartModal";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartProvider } from "./components/CartContext";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f8f8f5] ">
      <Navbar setOpen={setOpen} />

      <CartModal open={open}>
        <Cart onClose={() => setOpen(false)} />
      </CartModal>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
