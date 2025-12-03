"use client";
import React, { useState } from "react";
interface PlayerProps {
  name: string;
  symbol: string;
}

const PlayerInfo = ({ name, symbol }: PlayerProps) => {
  const [edit, setEdit] = useState(false);
  const [changedName, setChangedName] = useState(name);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => setChangedName(e.target.value);
  const handelClick = () => setEdit((prev) => !prev);

  let player = <li>{name}</li>;
  if (edit) {
    player = (
      <input
        onChange={handelChange}
        value={changedName}
        className="w-20 border-amber-50 border-1 rounded-sm"
        type="text"
      />
    );
  } else player = <li>{changedName}</li>;
  return (
    <div>
      <ol className="flex gap-6">
        {player}
        <li>{symbol}</li>
        <li>
          <button
            onClick={handelClick}
            className="bg-amber-100 rounded-sm text-black cursor-pointer px-2"
          >
            {edit ? "Save" : "Edit"}
          </button>
        </li>
      </ol>
    </div>
  );
};

export default PlayerInfo;
