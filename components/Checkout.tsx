"use client";
import React from "react";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import Image from "next/image";
import { FaLock } from "react-icons/fa6";
import amazonLogo from "../public/amazon-logo.png";
const Checkout = () => {
  return (
    <div className="absolute top-0 w-full h-full p-10  bg-white">
      <div className=" flex w-[70%] mx-auto items-center border-b border-gray-400  pb-5 justify-between">
        <div>
          <Image
            src={amazonLogo}
            alt={"amazon-logo"}
            width={150}
            height={150}
          />
        </div>
        <div>
          <h1 className="font-bold text-black text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400">
          <FaLock size={"30px"} />
        </div>
      </div>
      <div className="flex w-[70%] mx-auto text-black">
        <DeliveryAddress />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
