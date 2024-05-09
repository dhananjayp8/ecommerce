import React from "react";
import Image from "next/image";
import Ratings from "./shared/Ratings";
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="cursor-pointer">
        <div className="h-[250px] rounded-md overflow-hidden">
          <Image
            className="p-8"
            src={product.image}
            width={250}
            height={400}
            alt={product.title}
          />
        </div>
        <h1 className="font-bold">{product.title}</h1>
        <p>{`${product.description.substring(0, 50)}...`}</p>
        <Ratings ratings={product.rating} />
        <p className="font-bold text-2xl"> {`$${product.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
