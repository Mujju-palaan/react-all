//// Header using Use State to set and display name
"use client";
import React, { useState, useRef } from "react";

const Header1 = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState(null);
//   const [clicked, setClicked] = useState(false);

  const handelOnClick = () => { 
    setName(nameRef.current.value); 
    nameRef.current.value = ""; 
};

  return (
    <div className="bg-black p-16 rounded text-amber-50 justify-self-center text-center">
      <h1 className="text-3xl">THE ALMOST FINAL COUNTDOWN</h1>
      <p className="text-green-200">
        Stop the timer once you estimate that time is (almost) up
      </p>

      <h2 className="text-green-300 pt-4">
        Welcome {name ?? "undefined"}
      </h2>
      <div className="flex gap-2 justify-self-center mt-4 text-shadow-amber-50">
        <input
        ref={nameRef}
          className="border rounded w-40"
          type="text"
          name="Enter name"
        />
        <button
          onClick={handelOnClick}
          className="bg-green-300 rounded px-2 text-[12px]"
        >
          Set Name
        </button>
      </div>
    </div>
  );
};

export default Header1;
