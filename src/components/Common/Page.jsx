import React, { useEffect } from "react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

import { BASIC_CONSTANT } from "../../utils/basic.constants";
import { userInfo } from "../../recoil/user";
import Layout from "../Layouts";

export default function Page(props) {
  const { variant = "client", children, isPublic = true, title = "" } = props;
  const [user, setUser] = useRecoilState(userInfo);
  // const result = useQuery(["api/users"], async () => {
  //   const response = fetch(`${BASIC_CONSTANT.BACKEND_URL}/api/users`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDUxNjUzNjk1Nzg3OTI1MzM2MjciLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjYzNzM0ODQwfQ.87YvhHvGVaFbGWc81v-DKNTNU10zzrk1pQZly5gfpSQ`,
  //     },
  //   });

  //   console.log(response.json());
  //   return response.json();
  // });

  const udpateUser = async (token) => {
    try {
      const result = await fetch(`${BASIC_CONSTANT.BACKEND_URL}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDUxNjUzNjk1Nzg3OTI1MzM2MjciLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjYzNzM0ODQwfQ.87YvhHvGVaFbGWc81v-DKNTNU10zzrk1pQZly5gfpSQ`,
        },
      });
      // get user me from api 추가

      console.log((await result).json());
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
