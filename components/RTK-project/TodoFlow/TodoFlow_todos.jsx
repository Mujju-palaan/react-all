import React from "react";

const TodoFlow_todos = ({
  title,
  createdat,
  updatedat,
  checked,
  onChange,
  onSave,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(title);

  return (
    <div className="md:w-1/3 w-full p-4 border shadow-2xl rounded-xl">
      <div className="flex gap-2 justify-around items-start">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="accent-green-700 rounded-full"
        />

        {/* Title + dates */}
        <div className="flex flex-col gap-2 flex-1">
          {edit ? (
            <input
              className="border rounded px-2 py-1"
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          ) : (
            <div
              className={`text-[16px] ${
                checked ? "line-through text-gray-400" : ""
              }`}
            >
              {title}
            </div>
          )}

          <div className="flex gap-2 text-[12px] text-stone-500">
            <span>Created : {createdat}</span>
            <span>Updated : {updatedat}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-1">
          {edit ? (
            <button
              onClick={() => {
                onSave(editTitle);
                setEdit(false);
              }}
              className="cursor-pointer"
            >
              ✅
            </button>
          ) : (
            <button
              onClick={() => setEdit(true)}
              className="cursor-pointer"
            >
              📝
            </button>
          )}

          <button
            onClick={() => {
              setEdit(false);
              setEditTitle(title);
            }}
            className="cursor-pointer"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFlow_todos;
