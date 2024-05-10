"use client";
import React from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa6";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
const Checkout = () => {
  const cart = useAppSelector(getCart);
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
          <h1 className="font-bold text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400">
          <FaLock size={"30px"} />
        </div>
      </div>
      <div className="flex w-[70%] mx-auto border-b border-gray-500 py-2">
        <div className="flex text-black w-[50%] justify-between">
          <h1 className="font-bold  text-black text-lg">1. Delivery Address</h1>
          <p className="text-sm">
            Dhananjay Puranik
            <br />
            Plot no.37 <br />
            Professor Colony <br />
            Bhusawal, Maharashtra 425201 <br />
            Add delivery instructions
          </p>
        </div>
      </div>
      <div className="flex  w-[70%] mx-auto border-b border-gray-500 py-2">
        <div className="flex text-black w-[50%] justify-between">
          <h1 className="font-bold  text-black text-lg">
            2. Items and Delivery
          </h1>
        </div>
        {cart.map((product: any) => {
          return (
            <div className="my-4">
              <div className="flex text-black my">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                />
                <h1 className="font-bold">{product.title}</h1>
                <p className="text-2xl font-bold py-2">{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
