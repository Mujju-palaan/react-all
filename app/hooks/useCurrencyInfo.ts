
import { useState, useEffect } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<Record<string, number>>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const code = currency.toLowerCase(); // ensure lowercase

        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code}.json`
        );
        console.log("Fetching currency data for:", res);

        if (!res.ok) {
          console.error(`Fetch failed: ${res.statusText}`);
          return;
        }

        const json = await res.json();
        setData(json[code] || {});
      } catch (error) {
        console.error("Currency API error:", error);
      }
    }

    if (currency) fetchData();
  }, [currency]);
  console.log("Fetching currency data for:", data);
  return data;
}

export default useCurrencyInfo;
