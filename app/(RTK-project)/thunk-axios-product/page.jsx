"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../slice/product-thunk/productSlice";
import Spinner from "../../../components/common/Spinner";
import Error from "../../../components/common/Error";
import FetchProduct from "./FetchProduct";
import { useRouter } from "next/navigation";
import { IoAddCircleOutline } from "react-icons/io5";


const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((store) => store.product);
  console.log(data);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="p-8 flex flex-col justify-center items-center">
       <button
      onClick={() => router.push("/thunk-axios-product/addProduct")}
      className="flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 
      text-white text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
    >
      <IoAddCircleOutline size={18} />
      Add Product
    </button>
      {/* <div className="text-2xl font-bold  text-center p-4 flex flex-col justify-center items-center">
        Products
      </div> */}
      <hr className="my-6" />
      <FetchProduct data={data} />
    </div>
  );
};

export default Page;
