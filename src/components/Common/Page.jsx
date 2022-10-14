import React from "react";
import Head from "next/head";

import Layout from "../Layouts";
import useUser from "../../hooks/useUser";

export default function Page(props) {
  const { variant = "client", children, isPublic = true, title = "" } = props;
  useUser(isPublic);

  const handleRender = () => {
    try {
      return <Layout variant={variant}>{children}</Layout>;
    } catch (e) {
      return "error";
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {handleRender()}
    </>
  );
}
