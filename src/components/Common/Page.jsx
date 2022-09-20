import React, { useEffect } from "react";
import Head from "next/head";
import { useRecoilState } from "recoil";

import { BASIC_CONSTANT } from "../../utils/basic.constants";
import { userInfo } from "../../recoil/user";
import Layout from "../Layouts";

export default function Page(props) {
  const { variant = "client", children, isPublic = true, title = "" } = props;

  const [user, setUser] = useRecoilState(userInfo);

  const udpateUser = (token) => {
    try {
      // get user me from api 추가
      setUser();
    } catch (e) {
      // api error시 처리
    }
  };

  const userValidation = () => {
    const token = localStorage.getItem(BASIC_CONSTANT.CLIENT_TOKEN);
    if (!isPublic && !token) {
      // 로그인이 필요한 페이지에서 로그인 안했을시 정책에 따른 로직 작성
    }
    if (token) udpateUser(token);
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
