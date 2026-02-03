"use client";
import React, { useState } from "react";
import TodoFlow_Progress_Overview from "../../../components/RTK-project/TodoFlow/TodoFlow_Progress_Overview";
import TodoFlow_Add_todo from "../../../components/RTK-project/TodoFlow/TodoFlow_Add_todo";
import TodoFlow_todos from "../../../components/RTK-project/TodoFlow/TodoFlow_todos";
import TodoFlow_input from "../../../components/RTK-project/TodoFlow/TodoFlow_input";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoFlow,
  checkTodoFlow,updateTodoFlow
} from "../../slice/todoFlow/todoFlowSlice.js";

const Page = () => {
  const dispatch = useDispatch();
  const todoFlows = useSelector((state) => state.todoFlows.todoFlows);
  console.log("Todo Flows from Redux Store:", todoFlows);
  const [addClicked, setAddClicked] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault(); // prevent page reload
    if (!title.trim()) return; // optional validation
    console.log(title);
    dispatch(addTodoFlow(title));
    setTitle(""); // clear input after submit
    setAddClicked(false);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center md:m-8 m-2">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-5xl font-semibold">Todo Flow</h1>
        <p className="text-[14px] text-stone-600">
          Orginize your life, one task at a time
        </p>
      </div>

      <TodoFlow_Progress_Overview
        all={todoFlows.length}
        completed={todoFlows.filter((todo) => todo.completed).length}
        active={todoFlows.filter((todo) => !todo.completed).length}
      />

      <TodoFlow_Add_todo
        onClick={() => setAddClicked(true)}
        all={todoFlows.length}
        completed={todoFlows.filter((todo) => todo.completed).length}
        active={todoFlows.filter((todo) => !todo.completed).length}
      />

      {addClicked && (
        <TodoFlow_input
          title={title}
          setTitle={setTitle}
          onSubmit={handleSubmitAddTodo}
          onClickClose={() => setAddClicked(false)}
        />
      )}

      {todoFlows.map((todo) => (
        <TodoFlow_todos
          key={todo.id}
          title={todo.title}
          createdat={todo.createdat}
          updatedat={todo.updatedat}
          checked={todo.completed}
          onChange={() => dispatch(checkTodoFlow(todo.id))}
          onSave={(newTitle) =>
            dispatch(updateTodoFlow({ id: todo.id, title: newTitle }))
          }
        />
      ))}
    </div>
  );
};

export default Page;
