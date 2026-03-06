"use client";
import React, { useEffect } from "react";
import FetchProduct from "./FetchProduct";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../slice/product-thunk/productsSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.products);


  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
      <button 
      onClick={() => router.push('/thunk-axios-products/addProduct')}
      className="flex gap-2 justify-center cursor-pointer p-2 text-white font-medium text-sm bg-blue-500 rounded">
        <IoAddCircleOutline size={20} />
        <p>Add product</p>
      </button>
      <FetchProduct data={data} />
    </div>
  );
};

export default Page;
