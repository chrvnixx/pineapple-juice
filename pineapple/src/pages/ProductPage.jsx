import React from "react";
import goldPineapple from "../assets/product-page/goldPineapple.png";
import { ArrowLeft, StarIcon } from "lucide-react";
import CheckoutButtons from "../components/CheckoutButtons";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function ProductPage() {
  const { quantity, addProduct, cart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "tapache",
    image: goldPineapple,
    quantity: quantity,
    price: 4.99,
  };

  function handleClick(product) {
    addProduct(product);
    toast.success(`${product.name} has been added to your cart`);
  }

  return (
    <div>
      <div className="relative">
        <img src={goldPineapple} alt="" />
        <div
          onClick={() => navigate(-1)}
          className="bg-[#ffd900]/80 absolute top-4 left-4 p-2 rounded-full"
        >
          <ArrowLeft />
        </div>
      </div>

      <div className="flex justify-between px-4 mt-6 ">
        <div className="text-[12px] text-[#ffd900] ">PREMIUM COLLECTION</div>
        <div className="flex items-center gap-1">
          <StarIcon size={10} weight="thin" color="#ffd900" />
          <span className="text-[14px] ">4.9(124reviews)</span>
        </div>
      </div>

      <div>
        <h3 className="text-[30px] font-semibold ml-4 leading-9 ">
          Golden Pineapple <br /> Nectar
        </h3>
      </div>
      <div className="flex items-center gap-8 ">
        <div className="flex items-center gap-2 ml-4 mt-2">
          <span className="text-[24px] font-semibold ">$4.99</span>
        </div>

        {/* checkout buttons */}
        <CheckoutButtons onClick={() => handleClick(product)} />
      </div>

      <p className="mx-4 text-[14px] mt-6">
        Crafted from sun-ripened tropical pineapples, our nectar delivers a
        burst of pure sunshine in every sip. 100% natural, no added sugars, and
        packed with Vitamin C.
      </p>

      <div className=" flex justify-center mx-4 gap-3 mt-6">
        <div className="flex flex-col justify-center items-center bg-white shadow-lg w-28 h-17 rounded-xl">
          <span className="text-[12px] opacity-50 ">Calories</span>
          <span className="text-[18px] font-semibold ">120</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-lg w-28 h-17 rounded-xl">
          <span className="text-[12px] opacity-50 ">Vitamin C</span>
          <span className="text-[18px] text-[#ffd900] font-semibold ">
            100%
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-lg w-28 h-17 rounded-xl">
          <span className="text-[12px] opacity-50 ">Sugar</span>
          <span className="text-[18px] font-semibold ">0g</span>
        </div>
      </div>

      <div className="mx-4 p-4 bg-white mt-6">
        <h4 className="text-[16px] font-bold">Nutritional Information</h4>
        <div className="flex justify-between my-3">
          <span className="opacity-50">Serving Size</span>
          <span>1 Bottle (350ml)</span>
        </div>
        <hr className="border-0.5 border-black/5" />
        <div className="flex justify-between my-3">
          <span className="opacity-50">Total Fat</span>
          <span>0g</span>
        </div>
        <hr className="border-0.5 border-black/5" />
        <div className="flex justify-between my-3">
          <span className="opacity-50">Sodium</span>
          <span>5mg</span>
        </div>
        <hr className="border-0.5 border-black/5" />
        <div className="flex justify-between my-3">
          <span className="opacity-50">Total Carb.</span>
          <span>28g</span>
        </div>
        <hr className="border-0.5 border-black/5" />
      </div>
    </div>
  );
}
