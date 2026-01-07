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

export function Dropdown_category() {
  const categorys = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const [category, setCategory] = React.useState('Category')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-40 text-left justify-between">
        <Button variant="outline" className="text-left text-stone-600 font-normal">
          {true ?  category : 'Category'} <span className="mb-1 text-stone-600">⌄</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup
          value={category}
          onValueChange={setCategory}
          className="w-40 text-left"
        >
          {categorys.map((e) => (
            <DropdownMenuRadioItem key={e} value={e}>
              {e}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
