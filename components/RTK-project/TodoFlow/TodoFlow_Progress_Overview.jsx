"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

const TodoFlow_Progress_Overview = () => {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="md:w-1/3 w-full border shadow-2xl rounded-xl p-4 flex flex-col gap-4 justify-center">
      <div className="flex justify-between font-semibold">
        <span>Progress Overview</span>
        <span className="text-green-700">0%</span>
      </div>
      <div>
        <Progress value={progress} className="w-[90%]" />
      </div>
      <div className="flex justify-around text-center">
        <div className="flex flex-col ">
          <span className="font-semibold">1</span>
          <span className="text-[12px]">Total</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">1</span>
          <span className="text-[12px]">Active</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-green-700 font-semibold">0</span>
          <span className="text-[12px]">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default TodoFlow_Progress_Overview;
