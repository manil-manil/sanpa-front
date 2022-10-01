import { useFetchWrapper } from "../utils/fetch-wrapper";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [response, setResponse] = useState(null);
  const { get } = useFetchWrapper();

  const getResult = async () => {
    const result = await get(`${BASIC_CONSTANT.BACKEND_URL}/api/categories`);

    setResponse(result);
  };

  useEffect(() => {
    getResult();
  }, []);

  return response;
}
