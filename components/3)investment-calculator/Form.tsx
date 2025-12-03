import React from "react";
import Input from "./Input";

type StateKey = 'initialInvestment' | 'annualInvestment' | 'expectedReturn' | 'duration';

interface UserInput {
  inputIdentifier: StateKey;
  newValue: number | string;
  e: React.ChangeEvent<HTMLInputElement>;
}
const Form = ({userInput, setUserInput}:any) => {


  const handleChange = ({e, inputIdentifier, newValue}:UserInput) => {

    // console.log("Updated:", inputIdentifier, "→", newValue);
    setUserInput((prev:any) => ({
      ...prev,
      [inputIdentifier]: Number(newValue),
    }));
  };
  return (
    <>
      <section className="text-white p-10 bg-green-800 rounded-lg ">
        <div className="flex gap-8">
          <Input
            name={`INITIAL INVESTMENT`}
            value={userInput.initialInvestment}
            onChange={(e)=>handleChange({e, inputIdentifier: 'initialInvestment', newValue: e.target.value})}
          />
          <Input
            name={`ANNUAL INVESTMENT`}
            value={userInput.annualInvestment}
            onChange={(e)=>handleChange({e, inputIdentifier: 'annualInvestment', newValue: e.target.value})}
          />
        </div>
        <div className="flex gap-8 pt-8">
          <Input
            name={`EXPECTED RETURN`}
            value={userInput.expectedReturn}
            onChange={(e)=>handleChange({e, inputIdentifier: 'expectedReturn', newValue: e.target.value})}
          />
          <Input
            name={`DURATION`}
            value={userInput.duration}
            onChange={(e)=>handleChange({e, inputIdentifier: 'duration', newValue: e.target.value})}
          />
        </div>
      </section>
    </>
  );
};

export default Form;
