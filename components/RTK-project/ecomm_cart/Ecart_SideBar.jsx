"use client";
import React from "react";
import Product_Overview_Card from "./Product_Overview_Card";
import { useSelector } from "react-redux";

const Ecart_SideBar = () => {
  const EcommCarts = useSelector((state) => state.EcommCarts.EcommCarts);
  return (
    <>
      <div className="p-2 justify-center items-center flex flex-col gap-2">
        {EcommCarts.map((product, idx) => (
          <Product_Overview_Card
            key={idx}
            id={product.id}
            image={product.image || "/invest/Investing.webp"}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>

      <div className="p-4 border-b-2 border-t-2 mt-4 font-bold text-xl flex justify-between">
        <span>Total  : </span>
        <span>${EcommCarts.reduce((sum , item) => sum + item.price * item.quantity , 0)}</span>
        {/* Total: ${EcommCarts.reduce((sum , item) => sum + item.price * item.quantity , 0)} */}
      </div>
    </>
  );
};

export default Ecart_SideBar;
