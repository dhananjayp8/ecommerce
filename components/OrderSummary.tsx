import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import axios from "axios";
import { supabase } from "@/lib/supabase/products";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const OrderSummary = () => {
  const cart = useAppSelector(getCart);
  const createStripeSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const stripe = await stripePromise;

    //
    const checkoutSession = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });
  };
  return (
    <div className=" border border-gray p-4 mt-5 h-fit">
      <div>
        <h1 className="font-bold">Order Summary</h1>
        <div className="text-xs">
          <div className="flex items-center justify-between">
            <p>Items</p>
            <p>8900</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery</p>
            <p>8900</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>8900</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied</p>
            <p>8900</p>
          </div>
          <div className="flex justify-between text-2xl font-bold text-[#B12704] py-2 border-t border-b border-gray-300 my-1">
            <h1>Total Order :</h1>
            <h1>{"78667"}</h1>
          </div>
        </div>
        <button
          onClick={createStripeSession}
          className="bg-[#FFD814] w-full rounded-md px-4 py-1 my-3"
        >
          Place Your Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;