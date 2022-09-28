import { useQuery } from "@tanstack/react-query";
import { useFetchWrapper } from "../utils/fetch-wrapper";
import { BASIC_CONSTANT } from "../utils/basic.constants";

interface Iprops {
  token: string | null | undefined;
}

export default function useGetUser(token: Iprops) {
  const { get } = useFetchWrapper();

  if (token) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useQuery(
      ["api/users"],
      () => {
        const result = get(`${BASIC_CONSTANT.BACKEND_URL}/api/users`);
        return result;
      },
      { retry: false, suspense: true }
    );

    return data;
  }
}
