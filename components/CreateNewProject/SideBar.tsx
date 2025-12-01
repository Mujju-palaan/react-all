import React from "react";

type Props = {handleAddProjectButton: () => void};

const SideBar = (props: Props) => {
  return (
    <div className="bg-black w-1/5 rounded justify0-self-center text-center px-8 py-8 text-amber-50">
      <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
      <div className="p-4">
        <button onClick={props.handleAddProjectButton} className="bg-stone-800 rounded px-2 py-1 text-[12px] cursor-pointer">
          +Add Project
        </button>
      </div>
    </div>
  );
};

export default SideBar;
