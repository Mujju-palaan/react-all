'use client'
import { TiMessages } from "react-icons/ti";

const StatusCard = ({status, title, desc, category, likes, comments, color, onClickLike}) => {
  return (
    <div className="flex flex-col rounded-xl shadow-2xl border-t-5 p-4 my-4 gap-2 w-[90%]">
      <div className="gap-2">
        <span className={`inline-block rounded-full ${color} h-2 w-2`}></span>
        <span className="text-[12px] text-stone-500 pl-2">{status}</span>
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
      </div>
      <div className="text-[14px] text-stone-500">{desc}</div>
      <div>
        <button
          className="bg-blue-100 rounded px-2 cursor-pointer hover:bg-blue-500 
        text-[12px]"
        >
          {category}
        </button>
      </div>
      <div className="flex  justify-between ">
        <button
          className="bg-blue-100 rounded px-2 cursor-pointer hover:bg-blue-500 
        text-[12px]"
        onClick={onClickLike}
        >
          {/* ♡{feedback.likes } */}
          ♡{likes}
        </button>
        <button className="flex gap-1 text-sm cursor-pointer my-1">
          <TiMessages className="h-5 w-5"/> {comments}
        </button>
      </div>
    </div>
  );
};

export default StatusCard;
