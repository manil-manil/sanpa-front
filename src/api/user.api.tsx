import { BASIC_CONSTANT } from "../utils/basic.constants";
import fetchWrapper from "../utils/fetch-wrapper";

const { get } = fetchWrapper();

export const getMe = (token: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = get("api/users", token);

  return response;
};
