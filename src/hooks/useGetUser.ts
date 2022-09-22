import { useQuery } from "@tanstack/react-query";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { requestAPI, REQUEST_TYPE } from "../utils/request/requestFetch";

interface Iprops {
  token: string | null | undefined;
}

export default function useGetUser(token: Iprops) {
  if (token) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useQuery(
      ["api/users", token],
      () => {
        const result = requestAPI(
          `${BASIC_CONSTANT.BACKEND_URL}/api/users`,
          REQUEST_TYPE.GET,
          null,
          token
        );

        return result;
      },
      { retry: false, suspense: true }
    );

    return data;
  }
}
