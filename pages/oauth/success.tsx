import { useEffect } from "react";
import Router from "next/router";
import queryString from "query-string";

import { BASIC_CONSTANT } from "../../src/utils/basic.constants";
import { PATH_AUTH, PATH_PAGE } from "../../src/paths";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfo } from "../../src/recoil/user";

export default function Success() {
  const [user, setUser] = useRecoilState(userInfo);
  const getToken = () => {
    const token = queryString.parse(location.search)?.token ?? null;

    if (token && typeof token === "string") {
      localStorage.setItem(BASIC_CONSTANT.CLIENT_TOKEN, token);
      setUser({ ...user, token });
      Router.push(PATH_PAGE.root.url);
    } else {
      Router.push(PATH_AUTH.login.url);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div></div>;
}
