import React from "react";
import { TiMessages } from "react-icons/ti";

const Feedbackdata = () => {
  return (
    <div className="shadow-2xl rounded flex  m-4 p-4 bg-white gap-4">
      <div>
        <button className="btn">
            ♡123
            </button>
      </div>

      <div className="flex flex-col text-left">
        <div className="sm:w-140 flex justify-between ">
          <span className="font-semibold text-[14px]">Add tags for solutions</span>
          <span className="rigth-10 flex gap-1"><TiMessages />3</span>
        </div>
        <div className="text-stone-500 text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. , 
        </div>

        <div>
          <button className="bg-blue-100 rounded px-2 cursor-pointer hover:bg-blue-500 text-[12px]">
            Enhancement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedbackdata;
