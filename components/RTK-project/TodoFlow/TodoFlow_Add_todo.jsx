"use client";
import React from "react";
import { GoClock } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TodoFlow_Add_todo = () => {
  const [colour, setColour] = React.useState("All");
  return (
    <div className="md:w-1/3 w-full">
      <div className=" p-4 border shadow-2xl rounded-xl text-[12px] ">
        <div className="flex justify-between">
          <span>
            <button className="bg-stone-800 text-white rounded p-2 cursor-pointer">
              + Add Todo
            </button>
          </span>
          <span className=" text-green-600 p-2 cursor-pointer">
            Mark All Completed
          </span>
        </div>

        <div className="w-full m-2 flex gap-4 justify-center items-center bg-stone-300 rounded p-1">
          <button
            onClick={() => setColour("All")}
            className={`flex ${colour === "All" ? "bg-white" : "bg-none"}  rounded py-1 px-2 cursor-pointer`}
          >
            <span className="m-[2px]">
              <CiMenuFries />
            </span>
            <span>All {`1`}</span>
          </button>
          <button
            onClick={() => setColour("Active")}
            className={`flex ${colour === "Active" ? "bg-white" : "bg-none"} rounded py-1 px-2 cursor-pointer`}
          >
            <span className="m-[2px]">
              <GoClock />
            </span>
            <span>Active {`1`}</span>
          </button>
          <button
            onClick={() => setColour("Completed")}
            className={`flex ${colour === "Completed" ? "bg-white" : "bg-none"} 
            rounded py-1 px-2 cursor-pointer`}
          >
            <span className="m-[2px] ">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Completed {`0`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFlow_Add_todo;
