"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BgChanger = () => {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div className="w-full h-screen p-8" style={{ backgroundColor: color }}>
        <div className="flex justify-self-center gap-2">
          <Button
            style={{ backgroundColor: "blue", border: "1px solid black" }}
            onClick={() => setColor("blue")}
          >
            Click Me
          </Button>
          <Button
            style={{ backgroundColor: "green", border: "1px solid black" }}
            onClick={() => setColor("green")}
          >
            Click Me
          </Button>
          <Button
            style={{ backgroundColor: "black", border: "1px solid white" }}
            onClick={() => setColor("black")}
          >
            Click Me
          </Button>
          <Button
            style={{backgroundColor: "white",color: "black",border: "1px solid black",}}
            onClick={() => setColor("white")}
          >
            Click Me
          </Button>
          <Button
            style={{ backgroundColor: "yellow", border: "1px solid black" }}
            onClick={() => setColor("yellow")}
          >
            Click Me
          </Button>
          <Button
            style={{ backgroundColor: "purple", border: "1px solid black" }}
            onClick={() => setColor("purple")}
          >
            Click Me
          </Button>
          <Button style={{ backgroundColor: "red", border: "1px solid black" }}
          onClick={() => setColor("red")}
          >
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
