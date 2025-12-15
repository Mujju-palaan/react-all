import TodoForm from "@/components/10)Todo/TodoForm";
import { TodoProvider } from "@/app/useContexts/Todo";
import type {TodoType} from "@/app/useContexts/Todo"

import { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const addTodo = (todo:TodoType) => {
    setTodos((prev)=> [{...todo, id:Date.now()},...prev])
  };

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  };

  const deleteTodo = (id:string) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  };
  
  const toggleCompleted = (id) => {
    setTodos((prev)=> prev.map((prevTodo) => (
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )))
  };

  return (
    <TodoProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todos;
