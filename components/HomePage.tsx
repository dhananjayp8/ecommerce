"use client";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CategorywiseProduct from "./shared/CategorywiseProduct";

const HomePage = () => {
  const { mensProduct, womensProduct, getMensClothing, getWomensClothing } =
    useSupabase();
  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, []);
  console.log(mensProduct);
  return (
    <div>
      <Image
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"
        }
        style={{
          maskImage: "Linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
        width={10000}
        height={1000}
        alt="banner"
      />
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-64">
        {mensProduct.map((product: any) => {
          return (
            <div>
              <CategorywiseProduct product={product} />
            </div>
          );
        })}

        {womensProduct.map((product: any) => {
          return (
            <div>
              <CategorywiseProduct product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
