'use client'
import { useTodo } from "@/app/useContexts/Todo";
import { useState } from "react";
import type { FormEvent } from "react";
// import type { TodoType } from "@/app/useContexts/Todo";


const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');

  const { addTodo } = useTodo();
  const add = (e: FormEvent) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false, id: String(Date.now()) });
    setTodo('');
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer"
      >
        Add
      </button>
    </form> 
  );
};

export default TodoForm;
