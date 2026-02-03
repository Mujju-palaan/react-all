import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="lg:w-1/4 w-1/2 shadow border rounded items-center p-4">
      <div className="md:h-50 h-30">
        {/* <Image src={"/public/invest/Investing.webp"} alt="image" fill /> */}
      </div>
      <div>
        <h1 className="text-xl font-semibold">Premium HeadPhones</h1>
        <p className="text-xs text-stone-500 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illo
          voluptates nam architecto laboriosam ea recusandae laudantium
          blanditiis, accusamus fugit voluptatem molestiae, quod officia
          excepturi sapiente magni eligendi quisquam maiores?
        </p>
        {/* <p>rating</p> */}
      </div>
      <div className="flex justify-between">
        <span>$299.00</span>
        <span className="bg-stone-400 px-1 rounded ">
          <button className="cursor-pointer">Add to cart</button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
