import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates);
        } else {
          setData({});
          console.error("Failed to fetch currency data:", res["error-type"]);
        }
      })
      .catch((err) => {
        console.error("Currency fetch failed:", err.message);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
