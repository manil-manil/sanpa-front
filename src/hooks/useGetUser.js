import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { useFetchWrapper } from "../utils/fetch-wrapper";
import { BASIC_CONSTANT } from "../utils/basic.constants";
import { userInfo } from "../recoil/user";
import { useEffect, useState } from "react";

export default function useGetUser() {
  const [user, setUser] = useRecoilState(userInfo);
  const { get } = useFetchWrapper();
  const getUser = async () => {
    const token = localStorage.getItem(BASIC_CONSTANT.CLIENT_TOKEN);
    const result = await get(`${BASIC_CONSTANT.BACKEND_URL}/api/users`);
    setUser({ ...result, token });
  };

  useEffect(() => {
    getUser();
  }, []);
}
