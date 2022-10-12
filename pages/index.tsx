import type { NextPage } from "next";

import Page from "../src/components/Common/Page";

/**
 * 로그인이 필요한 경우 paths 파일에서 isPublic을 불러오면 된다.
 */

const Home: NextPage = () => {
  return <Page title="Tree Page">메인화면 하이</Page>;
};

export default Home;
