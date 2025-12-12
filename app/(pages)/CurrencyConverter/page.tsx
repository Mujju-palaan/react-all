"use client";
import { useState } from "react";
import InputCurrency from "@/components/9)CurrencyConverter/Input";
import { Button } from "@/components/ui/button";
import useCurrencyInfo from "@/app/hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [to, setTo] = useState<string>("inr");
  const [from, setFrom] = useState<string>("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currenyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currenyInfo);

  const convert = () => {
    setConvertedAmount(amount * currenyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
      className="relative flex w-full h-screen bg-contain bg-center justify-center items-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/35133750/pexels-photo-35133750.jpeg")`,
      }}
    >
      <div className="w-1/3 p-8 bg-white/60 ">
        <form className="rounded-xl flex flex-col gap-1"
        onSubmit={(e) => {
            e.preventDefault();
            convert()
        }}>
          <InputCurrency
            title={`From`}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency: string) => setFrom(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={from}
          />

          <div className="relative w-full h-0">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                onClick={swap}
            >
              swap
            </button>
          </div>

          <InputCurrency
            title={`To`}
            amount={convertedAmount}
            onAmountChange={(amount: number) => setAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={to}
          />

          <button
            className="rounded py-1 text-white cursor-pointer"
            style={{ backgroundColor: "blue" }}
            type="submit"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConverter;
