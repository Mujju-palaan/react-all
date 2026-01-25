import React from "react";

const TodoFlow_todos = () => {
  return (
    <div className="md:w-1/3 w-full p-4 border shadow-2xl rounded-xl">
      <div className="flex gap-2">
        <span>
          <input
            type="checkbox "
            name=""
            id=""
            className="accent-green-700 rounded-full"
          />
        </span>
        <span>Task-1</span>
      </div>

      <div className="ml-6 flex gap-4 text-[12px] text-stone-500">
        <span>created date</span>
        <span>updated date</span>
      </div>
    </div>
  );
};

export default TodoFlow_todos;
