"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateProduct } from "../../../slice/product-thunk/productSlice";
import { useRouter } from "next/navigation";

const ProductForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const labels = [
    { label: "Product Name", value: "product_name" },
    { label: "Price", value: "price" },
    { label: "Category", value: "category" },
    { label: "Stock", value: "stock" },
  ];

  const handelChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(CreateProduct(formData));

      if (CreateProduct.fulfilled.match(resultAction)) {
        router.push("/thunk-axios-product");
      } else {
        console.error("Create product failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  //   const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await dispatch(CreateProduct(formData)).unwrap();
  //     router.push("/thunk-axios-product");
  //   } catch (error) {
  //     console.error("Create product failed:", error);
  //   }
  // };

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="lg-w-1/3 xs-full flex flex-col gap-2 justify-start p-8 border rounded shadow-2xl"
      >
        {labels.map((e) => (
          <div key={e.value}>
            <label htmlFor={e.value} className="text-sm font-medium">
              {e.label}
            </label>

            <input
              id={e.value}
              type="text"
              name={e.value}
              value={formData[e.value] || ""}
              onChange={handelChange}
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
        <button type="submit" className="py-1 px-2 rounded bg-blue-500 m-2">
          Submit
        </button>
      </form>
      {console.log(formData)}
    </div>
  );
};

export default ProductForm;
