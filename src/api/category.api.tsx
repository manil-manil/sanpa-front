import fetchWrapper from "../utils/fetch-wrapper";

const { get } = fetchWrapper();

export const getCategorios = (token: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = get("api/categories", token);

  return response;
};
