import React from "react";
import PlayerInfo from "./PlayerInfo";

const GameHeader = () => {
  return (
    <div className="w-150 bg-neutral-800 p-8 text-amber-50 rounded-sm">
      <div className="flex justify-between">
        <PlayerInfo name="Mujju" symbol="X" />
        <PlayerInfo name="Mujahid" symbol="0" />
      </div>
    </div>
  );
};

export default GameHeader;
