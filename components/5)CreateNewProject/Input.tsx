import React, { forwardRef } from "react";

type Props = {
  title: string;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="flex flex-col">
      <label className="text-[12px]">{props.title}</label>
      <input 
        type={props.type}
        className="border-b-2 bg-stone-400 w-80 text-amber-50 border-amber-50 px-2 py-1 rounded"
        ref={ref}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
