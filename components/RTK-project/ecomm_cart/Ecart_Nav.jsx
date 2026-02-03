import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Ecart_Nav = ({ count = 4 }) => {
  return (
    <div className="flex justify-around p-4 shadow-xl">
      <div className="text-2xl font-bold cursor-pointer">
        <h1>Mujju Mart</h1>
      </div>
      <div className="cursor-pointer">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your product"
          className="w-80 p-2 border rounded-xl bg-stone-300"
        />
      </div>
      <div className="relative text-2xl cursor-pointer">
        <AiOutlineShoppingCart />
        {/* Cart Count Badge */}
        <span
          className="
        absolute -top-2 -right-2
        flex items-center justify-center
        h-4 w-4
        rounded-full
        bg-red-600
        text-xs font-bold text-white
      "
        >
          {count}
        </span>
      </div>
    </div>
  );
};

export default Ecart_Nav;
