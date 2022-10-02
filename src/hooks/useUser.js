import { useRecoilState } from "recoil";
import Router from "next/router";
import { useQuery } from "@tanstack/react-query";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { userInfo } from "../recoil/user";
import { useEffect } from "react";
import { getMe } from "../api/user.api";
import useLocalstorage from "./useLocalstorage";
import { PATH_AUTH } from "../paths";

export default function useUser(isPublic) {
  const [user, setUser] = useRecoilState(userInfo);
  const token = useLocalstorage(BASIC_CONSTANT.CLIENT_TOKEN) ?? user?.token;

  const enabled = !!token && Object.keys(user).length === 0;

  useQuery(["api/users"], () => getMe(token), {
    enabled,
    retry: 1,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      if (error.status === 401) {
        localStorage.removeItem(BASIC_CONSTANT.CLIENT_TOKEN);
        if (!isPublic) {
          Router.push(PATH_AUTH.login.url);
        }
      }
    },
  });
}
