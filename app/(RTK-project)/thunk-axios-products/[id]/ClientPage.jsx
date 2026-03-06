"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../../slice/product-thunk/productsSlice";
import ProductDetails from "./ProductDetails";
import Loader from "../../../../components/common/Spinner";

const ClientPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(GetProducts());
    }
  }, [dispatch, data.length]);

  const productId = String(id);
  //   console.log(productId);

  const ProductById = useMemo(() => {
    if (!productId && data.length === 0) return null;
    return data.find((p) => p.id === productId);
  }, [productId, data]);

  if(isLoading){
    <Loader />
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {console.log(ProductById)}
      {ProductById ? (
        <ProductDetails product={ProductById} />
      ) : (
        <div>Product Not Found</div>
      )}
    </div>
  );
};

export default ClientPage;
