import Image from "next/image";

const ProductCard = ({ image, title, description, price, handleCart }) => {
  return (
    <div className="w-full lg:w-1/4 p-2">
      <div className="shadow border rounded p-4 h-full flex flex-col m-2">
        {/* Image */}
        <div className="relative h-40 w-full">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
        </div>

        {/* Content */}
        <div className="py-2 flex-1">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-xs text-stone-500 line-clamp-2">{description}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">{`$${price}`}</span>
          <button
            onClick={handleCart}
            className="bg-stone-800 text-white text-xs px-2 py-1 rounded
            hover:bg-stone-700 transition cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
