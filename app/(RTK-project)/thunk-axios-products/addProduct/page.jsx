"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateProducts } from "../../../slice/product-thunk/productsSlice";

const ProductsForm = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [formdata, setFormData] = useState({});
  console.log(formdata);

  const labels = [
    { label: "product_name", name: "Product" },
    { label: "category", name: "Category" },
    { label: "price", name: "Price" },
    { label: "stock", name: "Stock" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateProducts(formdata))
    router.push("/thunk-axios-products")
    setFormData('')
  };

  return (
    <div className="border rounded shadow-2xl p-6 m-8 max-w-md w-full mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        {labels.map((e) => (
          <div key={e.label} className="p-2 flex gap-4 items-center">
            <label htmlFor={e.label} className="w-40">
              {e.name}
            </label>

            <input
              onChange={handleChange}
              type="text"
              name={e.label}
              id={e.label}
              required
              className="border rounded w-full p-1"
            />
          </div>
        ))}

        <div className="flex justify-center items-center gap-8 p-6">
          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={() => router.push("/thunk-axios-products")}
            className="bg-stone-500 px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
