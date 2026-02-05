'use client'
import React from "react";
import ProductCard from "../../cards/ProductCard";
import ProductData from "./ProductData";
import { useDispatch } from "react-redux";
import { addToCartProduct } from "../../../app/slice/Ecomm_cart/EcartSlice" // adjust path

const Ecart_ProductList = () => {
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(
      addToCartProduct({
        id : product.id,
        title : product.title,
        image : product.image,
        description : product.description,
        price : product.price,
      }),
    );
  };
  return (
    <div className="flex flex-wrap md:gap-8 gap-2 justify-center items-center p-4">
      {ProductData.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          handleCart={()=>handleCart(product)}
        />
      ))}
    </div>
  );
};

export default Ecart_ProductList;
