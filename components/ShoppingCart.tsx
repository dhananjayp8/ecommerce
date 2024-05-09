"use client";
import { useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart, removeFromCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  //console.log("Cart data", cart);
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <div className="py-4 flex justify-between border-b border-gray-300 py-5 ">
        <h1 className="font-bold text-2xl ">Shopping Cart</h1>
        <h1 className="font-medium">Price</h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div className="mt-4 flex justify-between">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div className="ml-4">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] font-bold my-1 text-xs">
                  In Stock
                </p>
                <h1
                  onClick={() => {
                    dispatch(removeFromCart(product.id));
                  }}
                  className="font-bold text-red-600 cursor-pointer w-fit"
                >
                  REMOVE
                </h1>
                <div className="flex text-xl justify-between items-center w-fit bg-gray-600 rounded-md px-4 py-1">
                  <div className="cursor-pointer mr-4">-</div>
                  <div>0</div>
                  <div className="cursor-pointer ml-4">+</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">{`₹${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.P.: <span className="line-through ">₹3,995.00</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
