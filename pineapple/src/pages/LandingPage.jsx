import React from "react";
import HeroImage from "../assets/landing-page/Hero-image.png";
import pineapple from "../assets/landing-page/pineapple.png";
import Card1 from "../components/Card1";
import { LeafIcon, LightningIcon } from "@phosphor-icons/react";
import { XCircleIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <div className="relative ">
        <div>
          <img src={HeroImage} alt="" />
        </div>
        <div className="absolute flex flex-col items-center top-30 left-0 right-0 ">
          <h1 className="text-[48px] text-white text-center font-bold leading-15">
            Sip the <br />
            Sunshine
          </h1>
          <p className="text-[18px] text-white mt-3">
            Experience the refreshing taste of pure, <br />
            sun-ripened pineapples in every drop.
          </p>

          <button className="bg-[#FFD900] py-3 px-13.75 rounded-full font-semibold mt-6">
            Shop Now
          </button>
        </div>
      </div>

      <div>
        <div className="mt-12 flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-[30px]">Why Pineapple?</h2>
          <div className="w-16 h-1.5 rounded-full bg-[#ffd900]  "></div>
          <p className="mt-2">
            Nature's golden gift packed with health <br /> benefits.
          </p>
        </div>

        <div className="flex flex-col items-center mt-4 ">
          <div className="mt-4">
            <Card1
              icon={LeafIcon}
              title="Purely Organic"
              desc="Sourced from sustainable sun-drenched farms."
            />
            <Card1
              icon={LightningIcon}
              title="Vitamin C Boost"
              desc="Strengthen your immunity with every refreshing sip."
            />
            <Card1
              icon={XCircleIcon}
              title="Zero Added Sugar"
              desc="100% natural fruit sweetness with no preservatives."
            />
          </div>
        </div>
      </div>

      <div
        className="bg-white flex flex-col  mt-26 mx-4.5 rounded-xl overflow-hidden border border-[#ffd900]/20 "
        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }}
      >
        <div className="flex justify-center">
          <img src={pineapple} alt="" />
        </div>
        <h3 className="text-[24px] font-bold mt-8 ml-2">Our Story</h3>
        <p className="text[16px] opacity-60 mt-4 w-78 ml-2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste id
          tempore temporibus. Nam id sint ea ipsa ratione officia, nihil facere
          dolorum, consequatur voluptates laudantium eveniet quas repellendus
          modi maxime.
        </p>
        <button className="bg-[#ffd900] w-31 h-12 rounded-xl ml-2 drop-shadow-xl mt-6 mb-8">
          Learn More
        </button>
      </div>
    </div>
  );
}
