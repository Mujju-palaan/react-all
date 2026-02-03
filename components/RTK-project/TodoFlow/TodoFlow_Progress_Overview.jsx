"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

const TodoFlow_Progress_Overview = ({active, all, completed}) => {
  const [progress, setProgress] = React.useState(null);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(((completed/all)*100).toFixed(0)));
    return () => clearTimeout(timer);
  }, [all, completed]);
  return (
    <div className="md:w-1/3 w-full border shadow-2xl rounded-xl p-4 flex flex-col gap-4 justify-center">
      <div className="flex justify-between font-semibold">
        <span>Progress Overview</span>
        <span className="text-green-700">{progress}%</span>
      </div>
      <div>
        <Progress value={progress} className="w-[90%] " />
      </div>
      <div className="flex justify-around text-center">
        <div className="flex flex-col ">
          <span className="font-semibold">{all}</span>
          <span className="text-[12px]">Total</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{active}</span>
          <span className="text-[12px]">Active</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-green-700 font-semibold">{completed}</span>
          <span className="text-[12px]">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default TodoFlow_Progress_Overview;
