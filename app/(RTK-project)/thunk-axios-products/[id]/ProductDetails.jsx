import React from "react";

const ProductDetails = ({product}) => {
  return (
    <div className="max-w-md mx-auto mt-10 rounded-xl border bg-white shadow-md p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">
        {product.product_name}
      </h1>

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Category</span>
          <span className="font-semibold">{product.category}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Price</span>
          <span className="font-semibold text-green-600">
            ₹{product.price}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Stock</span>
          <span
            className={`font-semibold ${
              product.stock > 0 ? "text-blue-600" : "text-red-500"
            }`}
          >
            {product.stock}
          </span>
        </div>

        <div className="border-t pt-3 text-sm text-gray-500 space-y-1">
          <p>
            Created:{" "}
            {product.createdAt
              ? new Date(product.createdAt).toLocaleString()
              : "N/A"}
          </p>

          <p>
            Updated:{" "}
            {product.updatedAt
              ? new Date(product.updatedAt).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
