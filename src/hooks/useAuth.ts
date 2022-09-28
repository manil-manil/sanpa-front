import { useRecoilState } from "recoil";
import Router from "next/router";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { PATH_AUTH } from "../paths";
import { userInfo } from "../recoil/user";

export default function useAuth() {
  const [user, setUser] = useRecoilState(userInfo);
  const login = () => {
    location.href = `${BASIC_CONSTANT.BACKEND_URL}/oauth2/authorization/google?redirect_url=${origin}/${BASIC_CONSTANT.REDIRECT_PATH}`;
  };

  const logout = () => {
    localStorage.removeItem(BASIC_CONSTANT.CLIENT_TOKEN);
    setUser(null);
    Router.push(PATH_AUTH.login.url);
  };
  return { login, logout };
}
