import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-1/3 rounded-xl border bg-white p-5 shadow-sm space-y-3">
      {/* Product Name */}
      <h2 className="text-xl font-semibold text-gray-800">
        {product.product_name}
      </h2>

      {/* ID */}
      <p className="text-sm text-gray-500">
        ID: <span className="font-medium">{product.id}</span>
      </p>

      {/* Category */}
      <p className="text-sm text-gray-500">
        Category: <span className="font-medium">{product.category}</span>
      </p>

      {/* Price & Stock */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">
          {product.price}
        </span>
        <span
          className={`text-sm font-medium ${
            product.stock > 0 ? "text-blue-600" : "text-red-600"
          }`}
        >
          Stock: {product.stock}
        </span>
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-400 space-y-1">
        <p>Created: {new Date(product.createdAt).toLocaleString()}</p>
        <p>Updated: {new Date(product.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductDetails;