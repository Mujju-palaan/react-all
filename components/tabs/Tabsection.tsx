"use client";
import { useState } from "react";
import type { Product } from "@/app/data/TabsData"; // <-- Import type
import { products } from "@/app/data/TabsData"; // <-- Import data

const Tabsection = () => {
  const [selecedProduct, setSelecedProduct] = useState<Product | null>(null);
  return (
    <div className="m-4">
      <h1>Products:</h1>
      <ul className="flex gap-3">
        {products.map((item) => (
          <li key={item.id}>
            <button onClick={() => setSelecedProduct(item)} className={`btn`}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="bg-blue-950 shadow-2xl text-amber-50 m-2 rounded-sm w-160 p-12">
        {selecedProduct ? (
          <>
            <h1 className="text-2xl">{selecedProduct.name}</h1>
            <p>{selecedProduct.description}</p>
            <p className="mt-2 text-blue-300">Price: ${selecedProduct.price}</p>
            <p className="mt-1">
              Status:{" "}
              {selecedProduct.inStock ? "Available ✅" : "Out of Stock ❌"}
            </p>
          </>
        ) : (
          <p>Please select the Product</p>
        )}
      </div>
    </div>
  );
};

export default Tabsection;
