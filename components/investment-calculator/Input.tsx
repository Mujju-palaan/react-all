import { on } from 'events';
import React from 'react'
interface InputProps {
  name: string;
  value?: number  | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput?: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }
}

const Input = ({name,value,onChange}:InputProps) => {
  return (
    <div className="flex flex-col">
        <label className="text-left text-[8px] opacity-80">{name}</label>
        <input
          className="w-50 h-8 border-amber-50 border rounded-sm pl-2"
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={onChange}

        />
      </div>
  )
}

export default Input