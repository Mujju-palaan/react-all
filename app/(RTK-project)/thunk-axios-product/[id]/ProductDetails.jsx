"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { UpdateProduct } from "../../../slice/product-thunk/productSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(product); // committed data
  const [draftData, setDraftData] = useState(null); // temporary edits

  // Start editing → copy formData into draft
  const handleEdit = () => {
    setDraftData({ ...formData });
    setEdit(true);
  };

  // Update ONLY draft data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDraftData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save → commit draft into formData + Redux
  const handleSubmit = async () => {
    try {
      await dispatch(
        UpdateProduct({
          id: draftData.id,
          data: draftData,
        }),
      ).unwrap();

      setFormData(draftData); // ✅ commit happens ONLY here
      setDraftData(null);
      setEdit(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!formData?.id) return null;

  return (
    <div className="w-1/3 rounded-xl border bg-white p-5 shadow-sm space-y-4">
      {/* Product Name */}
      <h2 className="text-xl font-semibold text-gray-800">
        {edit ? draftData.product_name : formData.product_name}
      </h2>

      {/* ID */}
      <p className="text-sm text-gray-500">
        ID: <span className="font-medium">{formData.id}</span>
      </p>

      {/* Category */}
      <p className="text-sm text-gray-500">
        Category:{" "}
        <span className="font-medium">
          {edit ? draftData.category : formData.category}
        </span>
      </p>

      {/* Price & Stock */}
      <div className="flex justify-between items-center">
        {/* Price */}
        {!edit ? (
          <span className="text-lg font-bold text-green-600">
            {formData.price}
          </span>
        ) : (
          <input
            className="w-24 rounded border px-2 py-1"
            type="text"
            name="price"
            value={draftData.price}
            onChange={handleChange}
          />
        )}

        {/* Stock */}
        <span
          className={`text-sm font-medium ${
            (edit ? draftData.stock : formData.stock) > 0
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          Stock{" "}
          {!edit ? (
            formData.stock
          ) : (
            <input
              className="ml-2 w-20 rounded border px-2 py-1"
              type="number"
              name="stock"
              value={draftData.stock}
              onChange={handleChange}
            />
          )}
        </span>
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-400 space-y-1">
        <p>
          Created:{" "}
          {formData.createdAt
            ? new Date(formData.createdAt).toLocaleString()
            : "-"}
        </p>
        <p>
          Updated:{" "}
          {formData.updatedAt
            ? new Date(formData.updatedAt).toLocaleString()
            : "-"}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-4">
        {!edit ? (
          <button
            onClick={handleEdit}
            className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
          >
            Save
          </button>
        )}

        <button
          onClick={() => {
            if (edit) {
              setEdit(false);
              setDraftData(null); // discard changes
            } else {
              router.push("/thunk-axios-product");
            }
          }}
          className="rounded bg-stone-500 px-3 py-1 text-white hover:bg-stone-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
