import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  RemoveFromCart,
} from "../../../app/slice/Ecomm_cart/EcartSlice";

const Product_Overview_Card = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex gap-4 p-2 items-center justify-center shadow-xl border rounded">
      <div className="relative w-16 h-14">
        {image && (
          <Image
            src={image}
            alt="product"
            fill
            className="object-cover rounded"
            sizes="40px"
          />
        )}
      </div>
      <div
        className="w-12 flex flex-col text-[12px] text-stone-500 items-center justify-center
      text-center"
      >
        <div className="text-center line-clamp-1">{title}</div>
        <div>{`$${price}`}</div>
        <div>each</div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <button
          onClick={() => dispatch(DecreaseQuantity({ id }))}
          className="w-4 h-4 flex items-center justify-center rounded-full bg-stone-400
        text-white text-sm font-bold cursor-pointer hover:bg-stone-500 transition"
        >
          −
        </button>

        <span className="items-center">{quantity}</span>
        <button
          onClick={() => dispatch(IncreaseQuantity({ id }))}
          className="w-4 h-4 flex items-center justify-center rounded-full bg-stone-400
        text-white text-sm font-bold cursor-pointer hover:bg-stone-500 transition"
        >
          +
        </button>
      </div>
      <div className="font-bold">{`$${price}`}</div>
      <div>
        <button
          onClick={() => dispatch(RemoveFromCart({ id }))}
          className="cursor-pointer"
        >
          <MdDeleteForever className="text-red-600 text-xl hover:scale-110 transition" />

        </button>
      </div>
    </div>
  );
};

export default Product_Overview_Card;
