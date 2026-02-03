import React from "react";

const TodoFlow_input = ({ onClickClose, onSubmit, title, setTitle }) => {
  return (
    <div className="md:w-1/3 w-full">
      <form
        onSubmit={onSubmit}
        className="p-4 border shadow-2xl rounded-xl text-[12px] flex gap-2"
      >
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Enter title"
          className="w-80 border rounded p-2"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit" className="text-2xl cursor-pointer">
          ✅
        </button>

        <button
          type="button"
          className="text-2xl cursor-pointer"
          onClick={onClickClose}
        >
          ❌
        </button>
      </form>
    </div>
  );
};

export default TodoFlow_input;
