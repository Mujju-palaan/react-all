import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stock = parseInt(product.stock, 10) || 0;

  const stockStatus =
    stock === 0
      ? { label: "Out of Stock", dot: "bg-red-500", badge: "bg-red-500/10 border-red-500/30 text-red-400" }
      : stock < 10
      ? { label: "Low Stock", dot: "bg-amber-500", badge: "bg-amber-500/10 border-amber-500/30 text-amber-400" }
      : { label: "In Stock", dot: "bg-emerald-500", badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-8 font-serif">
      <div
        className={`w-80 bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden shadow-2xl transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Gold accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800" />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-neutral-800">
          <p className="text-xs tracking-widest uppercase text-yellow-600 mb-1">
            {product.category}
          </p>
          <h1 className="text-2xl font-normal text-neutral-100 leading-snug tracking-tight">
            {product.product_name}
          </h1>
        </div>

        {/* Body */}
        <div className="px-8 pt-6 pb-8">
          {/* Price + Stock badge */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-600 mb-1">Price</p>
              <p className="text-3xl font-light text-neutral-100 tracking-tight">
                ${product.price}
              </p>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs tracking-widest uppercase ${stockStatus.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${stockStatus.dot}`} />
              {stockStatus.label}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

          {/* Units available */}
          <div className="flex justify-between items-center mb-7">
            <span className="text-xs tracking-widest uppercase text-neutral-600">
              Units Available
            </span>
            <span className="text-sm text-neutral-400 tabular-nums">{stock}</span>
          </div>

          {/* CTA */}
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;