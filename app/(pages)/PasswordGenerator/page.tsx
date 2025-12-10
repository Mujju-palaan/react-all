"use client";
import { useState } from "react";

const PasswordGenerator = () => {
  const [count, setCount] = useState<number>(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center">
      <div className="bg-gray-800 rounded p-6 w-1/2">
        <h1 className="font-bold text-3xl">Password Generator</h1>
        <div className="flex mt-6">
          <input
            className="bg-white rounded w-full h-8 text-black border-none"
            type="text"
            name=""
            id=""
          />
          <button className="rounded bg-blue-600 px-2 cursor-pointer">
            Copy
          </button>
        </div>
        <div className="m-4 flex gap-6">
          <div className="flex gap-2">
            <input
              type="range"
              min={8}
              max={100}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <label htmlFor="number">Length: {count} </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" onChange={(prev) => setNumber(!prev)} />
            <label htmlFor="number">Number </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" onChange={(prev) => setCharacter(!prev)} />
            <label htmlFor="number">Character </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
