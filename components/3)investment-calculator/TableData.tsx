import React from "react";
import {
  calculateInvestmentResults,
  formatter,
} from "./investment";

const TableData = ({ userInput }: any) => {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestmentt = userInput.initialInvestment;
//   console.log("TableData initialInvestment:", initialInvestmentt);
//   console.log("TableData resultData:", resultData);
  // console.log("TableData userInput:", userInput.initialInvestment);
  return (
    <table className=" w-full h-auto">
      <thead>
        <tr className="text-white justify-self-center">
          <th className="p-2">Year</th>
          <th className="p-2">Investment Value</th>
          <th className="p-2">Intrest(Year)</th>
          <th className="p-2">Total Intrest</th>
          <th className="p-2">Invested Capital</th>
        </tr>
      </thead>

      <tbody className="text-white text-right">
        {resultData.map((data: any) => {
          const totalIntrest =
            data.valueEndOfYear -
            data.annualInvestment -
            data.year -
            initialInvestmentt;
            // console.log("TableData totalIntrest:", totalIntrest);
            const totalAmountInvested = data.valueEndOfYear - totalIntrest;
          return (
            <tr key={data.year}>
              <td className="p-2">{data.year}</td>
              <td className="p-2">{formatter.format(data.valueEndOfYear)}</td>
              <td className="p-2">{formatter.format(data.interest)}</td>
              <td className="p-2">{formatter.format(totalIntrest)}</td>
              <td className="p-2">{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
