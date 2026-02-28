"use client";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../../slice/product-thunk/productSlice";
import ProductDetails from "./ProductDetails";
import BackButton from "../../../../components/common/BackButton";


const ClientPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.product);

  // fetch only if data is empty
  useEffect(() => {
    if (data.length === 0) {
      dispatch(GetProduct());
    }
  }, [dispatch, data.length]);

  // convert id → number (IMPORTANT)
  const productId = String(id);

  const productById = useMemo(() => {
    if (!productId || data.length === 0) return null;

    return data.find((product) => product.id === productId);
  }, [productId, data]);

  console.log(productById);
  

  return (
    <>
      <div className="justify-start">
        <BackButton url={'/thunk-axios-product/'} />
      </div>

      <div className="flex flex-col justify-center items-center p-8">
        {productById && <ProductDetails product={productById} />}
      </div>
    </>
  );
};

export default ClientPage;
