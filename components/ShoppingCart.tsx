"use client";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import {
  clearAllCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import SubTotal from "./shared/SubTotal";

const ShoppingCart = ({
  cart,
  totalPrice,
}: {
  cart: any;
  totalPrice: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[70%]">
      <div className="py-5 flex justify-between border-b border-gray-300 ">
        <h1 className="font-bold text-2xl ">Shopping Cart</h1>
        <h1 className="font-medium">Price</h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div className=" py-4 mt-4 flex justify-between  border-b border-gray-200">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div className="ml-4 ">
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
                  <div
                    onClick={() => {
                      product.quantity > 1 &&
                        dispatch(decrementQuantity(product));
                    }}
                    className="cursor-pointer mr-4"
                  >
                    -
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    onClick={() => {
                      dispatch(incrementQuantity(product));
                    }}
                    className="cursor-pointer ml-4"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.P.: <span className="line-through ">$3,995.00</span>
              </p>
            </div>
          </div>
        );
      })}
      <h1
        onClick={() => {
          dispatch(clearAllCart());
        }}
        className="text-red-600 font-bold cursor-pointer py-2"
      >
        CLEAR ALL
      </h1>
      <SubTotal left={false} length={cart.length} totalPrice={totalPrice} />
    </div>
  );
};

export default ShoppingCart;
