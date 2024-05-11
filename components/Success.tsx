"use client";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Success = () => {
  const cart = useAppSelector(getCart);
  return (
    // <div className="absolute top-0 w-full bg-white py-12">
    //   <div className="mx-auto w-[70%]">
    //     <h1 className="text-black">Thankyou for ordering with Amazon.in</h1>
    //     <div>
    //       <h1 className="font-bold py-3 underline text-black">Order Details</h1>
    //       {cart.map((product: any) => {
    //         return (
    //           <div>
    //             <Image
    //               src={product.image}
    //               alt={product.title}
    //               width={100}
    //               height={100}
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="absolute top-0 w-full bg-white py-12">
      <div className="mx-auto w-[70%] text-center">
        <h1 className="text-black">Thankyou for ordering with Amazon.in</h1>
        <div>
          <h1 className="font-bold py-3 text-black underline">Order Details</h1>
          {cart.map((product: any) => {
            return (
              <div key={product.id}>
                <div className="flex text-black">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                  />
                  <div className="ml-5 font-bold text-black">
                    <h1>{product.title}</h1>
                    <h1>{`$${product.price}`}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
          <Link
            href={"/"}
            className="bg-[#FFD814] text-black px-4 py-1 rounded-md "
          >
            Buy more products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
