import { useRecoilState } from "recoil";
import router from "next/router";
import { userInfo } from "../recoil/user";
import { BASIC_CONSTANT } from "./basic.constants";
import { PATH_AUTH } from "../paths";

export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

function useFetchWrapper() {
  const [auth, setAuth] = useRecoilState(userInfo);

  return {
    get: request(METHODS.GET),
    post: request(METHODS.POST),
    put: request(METHODS.PUT),
    delete: request(METHODS.DELETE),
  };

  function request(method) {
    return (url, body) => {
      const requestOptions = {
        method,
        headers: authHeader(),
      };
      if (body) {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
  }

  function authHeader() {
    // return auth header with jwt if user is logged in and request is to the api url
    const token =
      auth?.token ?? localStorage.getItem(BASIC_CONSTANT.CLIENT_TOKEN);
    const isLoggedIn = !!token;

    if (isLoggedIn) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  }

  function handleResponse(response) {
    const token =
      auth?.token ?? localStorage.getItem(BASIC_CONSTANT.CLIENT_TOKEN);
    return response.text().then((text) => {
      const data = text;
      if (!response.ok) {
        if ([401, 403].includes(response.status) && token) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          // localStorage.removeItem(BASIC_CONSTANT.CLIENT_TOKEN);
          // setAuth(null);
          // router.replace(PATH_AUTH.login.url);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return JSON.parse(data);
    });
  }
}

export { useFetchWrapper };
