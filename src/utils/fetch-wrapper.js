import axios from "axios";
import { BASIC_CONSTANT } from "./basic.constants";
import { PATH_AUTH } from "../paths";

export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

function fetchWrapper() {
  return {
    get: request(METHODS.GET),
    post: request(METHODS.POST),
    put: request(METHODS.PUT),
    delete: request(METHODS.DELETE),
  };

  function request(method) {
    return async (path, token, body) => {
      const url = `${BASIC_CONSTANT.BACKEND_URL}/${path}`;
      const requestOptions = {
        method,
        headers: authHeader(token),
      };
      if (body) {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }

      return axios[method](url, requestOptions).then(handleResponse);
    };
  }

  function authHeader(token) {
    const isLoggedIn = !!token;

    if (isLoggedIn) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  }

  function handleResponse(response) {
    if (response.status !== 200 && response.status !== 201) {
      throw { status: response.status, text: response.statusText };
    }

    return response.data;
  }
}

export default fetchWrapper;
