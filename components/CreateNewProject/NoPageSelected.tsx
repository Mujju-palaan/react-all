import React from "react";
import Image from "next/image";

type Props = {handleAddProjectButton: () => void};

const NoPageSelected = (props :  Props) => {
  return (
    <div className="w-full justify-center text-center">
      <Image
        src="/Notepad_icon.svg.png"
        width={100}
        height={100}
        alt="No Page Selected"
        className="mx-auto mt-20 mb-8"
      />
      <h1 className="text-2xl font-bold mb-2 text-stone-600">
        No Project Selected
      </h1>
      <p className="text-xs text-stone-400">
        Please select a project or get started.
      </p>
      <div className="mt-4">
        <button
          onClick={props.handleAddProjectButton}
          className="bg-stone-800 rounded text-amber-50 p-2 text-[12px] cursor-pointer"
        >
          Create new Project
        </button>
      </div>
    </div>
  );
};

export default NoPageSelected;
