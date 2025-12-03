import React, { useState } from "react";

type Props = {handelAddTask: (task: string) => void;}

const NewTask = ({handelAddTask}:Props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(e.target.value);
  };

  const handelClick = () => {
    handelAddTask(enteredTask);
    setEnteredTask('');
  };

  console.log(enteredTask)
  return (
    <div className="flex gap-4 my-4">
      <input
        type="text"
        onChange={handelChange}
        value={enteredTask}
        className="bg-stone-300 rounded text-center"
      />
      <button className="bg-stone-800 rounded text-amber-50 py-1 px-2 cursor-pointer"
      onClick={handelClick}>
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
