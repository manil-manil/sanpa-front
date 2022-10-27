import fetchWrapper from "../utils/fetch-wrapper";

const { get, post } = fetchWrapper();
const path = "api/questions/";

export const getNodeQuestion = (token: string, nodeId: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = get(`${path}node/${nodeId}`, token);

  return response;
};

export const challengeQuestion = (token: string, data: any) => {
  const response = post("api/challenge", token, data);

  return response;
};
