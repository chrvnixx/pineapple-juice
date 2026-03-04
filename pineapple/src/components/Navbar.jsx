import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Menu } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-4">
        <Menu />
        <div className="text-[20px] font-bold ">
          Pineapple <span className="text-[#ffd900] ">Juice</span>
        </div>
        <ShoppingCartIcon size={28} />
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
