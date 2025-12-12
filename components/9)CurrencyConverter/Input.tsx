"use client";
import { useId } from "react";
type CurrencyOptionType = string;
type Props = {
  title: string;
  amount: number;
  onAmountChange: (value: number) => void;
  onCurrencyChange: (value: string) => void;
  selectCurrency: string;
  currencyOptions: CurrencyOptionType[];
};
const InputCurrency = ({
  title,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency,
  currencyOptions = [],
  amountDisable = false,
    currencyDisable = false,
}: Props) => {
  const amountInputId = useId();

  return (
    <div className="w-full bg-white rounded">
      <div className="flex justify-between text-stone-500 text-[12px] p-2">
        <label>{title}</label>
        <label>Currency</label>
      </div>
      <div className="flex justify-between text-stone-500 text-[14px] p-2">
        <input
          id={amountInputId}
          className="border-none"
          type="number"
          placeholder="Enter Currency"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency: string) => (
            <option key={currency} className="rounded" value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputCurrency;
