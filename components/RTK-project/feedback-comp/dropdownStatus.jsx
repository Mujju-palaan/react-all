"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownStatus() {
  const [roadmap, setRoadmap] = React.useState("Status");
  const roadmaps = ["Planned", "In-Progress", "Live"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-40 text-left justify-between">
        <Button variant="outline" className="text-left text-stone-600 font-normal">
          {true ?  roadmap : 'Status'} 
           <span className="mb-1 text-stone-600">⌄</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup
          value={roadmap}
          onValueChange={setRoadmap}
          className="w-40 text-left"
        >
          {roadmaps.map((e) => (
            <DropdownMenuRadioItem key={e} value={e}>
              {e}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
