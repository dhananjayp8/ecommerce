import Image from "next/image";
import React from "react";
import Ratings from "./Ratings";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const CategorywiseProduct = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="border border-gray-300 p-2 bg-white">
      <h1 className="font-bold  text-black">{product.category}</h1>
      <div className=" mt-2 h-[250px] overflow-hidden flex justify-center items-center">
        <Image
          className="p-6"
          src={product.image}
          width={200}
          height={150}
          alt={product.title}
        />
      </div>
      <div>
        <h1 className="text-black">{product.title}</h1>
        <Ratings ratings={product.rating} />
      </div>
      <div className="my-2">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
          className="w-full py-2 rounded-md bg-[#FFD814] text-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CategorywiseProduct;
