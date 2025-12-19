"use client";
import { useState } from "react";
import { useTodo, type TodoType } from "@/app/useContexts/Todo";

type Props = {
  todo: TodoType;
};

const TodoItem = ({ todo }: Props) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
      />

      <button
        disabled={todo.completed}
        onClick={() => {
          if (isTodoEditable) 
            editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-gray-50 disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-gray-50"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
