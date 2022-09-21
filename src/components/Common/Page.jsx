import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useRecoilState } from "recoil";

import { BASIC_CONSTANT } from "../../utils/basic.constants";
import { userInfo } from "../../recoil/user";
import Layout from "../Layouts";
import useGetUser from "../../hooks/useGetUser";
import { PATH_AUTH } from "../../paths";

export default function Page(props) {
  const { variant = "client", children, isPublic = true, title = "" } = props;
  const [user, setUser] = useRecoilState(userInfo);
  const result = useGetUser(user?.token);

  const udpateUser = () => setUser({ ...user, result });

  const userValidation = () => {
    const token =
      localStorage.getItem(BASIC_CONSTANT.CLIENT_TOKEN) ?? user?.token;
    if (!isPublic && !token) {
      // 로그인이 필요한 페이지에서 로그인 안했을시 정책에 따른 로직 작성
      setUser(null);
      localStorage.removeItem(BASIC_CONSTANT.CLIENT_TOKEN);
      Router.push(PATH_AUTH.login.url);
    }

    if (token) udpateUser();
  };

  const handleRender = () => {
    try {
      return <Layout variant={variant}>{children}</Layout>;
    } catch (e) {
      return "error";
    }
  };

  useEffect(() => {
    userValidation();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {handleRender()}
    </>
  );
}
