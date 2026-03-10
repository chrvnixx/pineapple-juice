import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartModal from "./components/CartModal";
import Cart from "./components/Cart";
import { useState } from "react";

import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationModal from "./components/ConfirmationModal";
import OrderConfirmed from "./components/OrderConfirmed";
import MenuModal from "./components/MenuModal";
import Menu from "./components/Menu";

function App() {
  const [open, setOpen] = useState(false);
  const [openThanks, setOpenThanks] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-[#f8f8f5] ">
      <Navbar setOpen={setOpen} setOpenMenu={setOpenMenu} />

      <CartModal open={open}>
        <Cart onClose={() => setOpen(false)} setOpen={setOpen} />
      </CartModal>
      <ConfirmationModal openThanks={openThanks}>
        <OrderConfirmed onClose={() => setOpenThanks(false)} />
      </ConfirmationModal>

      <MenuModal openMenu={openMenu}>
        <Menu onClose={() => setOpenMenu(false)} />
      </MenuModal>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/checkout"
          element={<CheckoutPage setOpenThanks={setOpenThanks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
