import React from "react";
import TodoFlow_Progress_Overview from "../../../components/RTK-project/TodoFlow/TodoFlow_Progress_Overview";
import TodoFlow_Add_todo from "../../../components/RTK-project/TodoFlow/TodoFlow_Add_todo";
import TodoFlow_todos from "../../../components/RTK-project/TodoFlow/TodoFlow_todos";

const page = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:m-8 m-2">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-5xl font-semibold">Todo Flow</h1>
        <p className="text-[14px]  text-stone-600">Orginize your life, one task at a time</p>
      </div>

      <TodoFlow_Progress_Overview />

      <TodoFlow_Add_todo />

      <TodoFlow_todos />
    </div>
  );
};

export default page;
