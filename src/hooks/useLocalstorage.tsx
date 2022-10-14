import { useEffect, useState } from "react";

export default function useLocalstorage(key: string) {
  const [data, setData] = useState<any>(null);

  const getLocalStorage = (key: string): void => {
    const value = localStorage.getItem(key);
    if (value) {
      setData(value);
    }
  };

  useEffect(() => {
    getLocalStorage(key);
  }, [key]);

  return data;
}
