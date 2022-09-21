import Router from "next/router";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { PATH_AUTH } from "../paths";

export default function useAuth() {
  const login = async () => {
    location.href = `${BASIC_CONSTANT.BACKEND_URL}/oauth2/authorization/google?redirect_url=${origin}/${BASIC_CONSTANT.REDIRECT_PATH}`;
  };

  const logout = () => {
    localStorage.removeItem(BASIC_CONSTANT.CLIENT_TOKEN);
    Router.push(PATH_AUTH.login.url);
  };
  return { login, logout };
}
