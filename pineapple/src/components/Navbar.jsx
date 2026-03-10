import { Menu, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function Navbar({ setOpen, setOpenMenu }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between p-4">
        <Menu onClick={() => setOpenMenu(true)} />
        <div onClick={() => navigate("/")} className="text-[20px] font-bold ">
          Pineapple <span className="text-[#ffd900] ">Juice</span>
        </div>
        <div onClick={() => setOpen(true)}>
          <ShoppingCartIcon size={28} />
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
