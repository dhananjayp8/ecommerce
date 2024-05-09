import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";
import AddToCartContainer from "@/components/AddToCartContainer";
const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
        <div>
          {singleProduct.map((product: any) => {
            return (
              <>
                <div className="flex">
                  <Image
                    src={product.image}
                    width={250}
                    height={400}
                    alt={product.title}
                    className="p-4"
                  />
                  <div className="ml-2 w-[70%]">
                    <h1 className="font-bold text-lg">{product.title}</h1>
                    <p>{product.description}</p>
                    <Ratings ratings={product.rating} />
                    <h1 className="font-bold">{`$${product.price}`}</h1>
                    <div>
                      <h1 className="font-bold text-sm">About this item</h1>
                      <li>
                        Processor: High performance MediaTek G85 Enhance gaming
                        with 1GHz GPU 8GB of RAM including 4GB virtual 6.74 HD+
                        90Hz display with Corning Gorilla Glass 3 Protection
                        50MP AI Triple camera Fast Side fingerprint 5000mAh
                        Battery
                      </li>
                      <li>
                        Processor: High performance MediaTek G85 Enhance gaming
                        with 1GHz GPU 8GB of RAM including 4GB virtual 6.74 HD+
                        90Hz display with Corning Gorilla Glass 3 Protection
                        50MP AI Triple camera Fast Side fingerprint 5000mAh
                        Battery
                      </li>
                      <li>
                        Processor: High performance MediaTek G85 Enhance gaming
                        with 1GHz GPU 8GB of RAM including 4GB virtual 6.74 HD+
                        90Hz display with Corning Gorilla Glass 3 Protection
                        50MP AI Triple camera Fast Side fingerprint 5000mAh
                        Battery
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <AddToCartContainer />
      </div>
    </div>
  );
};

export default SingleProduct;
