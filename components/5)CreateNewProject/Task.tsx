import React from "react";
import NewTask from "./NewTask";
import type { Tasktype } from "@/app/(practice)/CreateNewProject/page";

type Props = {
  tasks: Tasktype[];
  handelAddTask: (text: string) => void;
  handelDeleteTask: (taskId: number | string | undefined) => void;
};

const Task = ({ tasks, handelAddTask, handelDeleteTask }: Props) => {
  return (
    <div >
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      <NewTask handelAddTask={handelAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-600">
          This project does not have any task yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="">
          {tasks.map((task: Tasktype) => (
            <li key={task.taskId} className="flex justify-between my-1">
              <span>{task.text}</span>

              <button
              className="text-amber-50 bg-stone-800 rounded py-1 px-2 cursor-pointer"
                onClick={() => {
                  
                    handelDeleteTask(task.taskId);
                }}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task;
