import type { NextPage } from "next";

import CategoryPage from "../src/components/CategoryPage";
import Page from "../src/components/Common/Page";
import { PATH_PAGE } from "../src/paths";

const Category: NextPage = () => {
  return (
    <Page title="Category" isPublic={PATH_PAGE.category.isPublic}>
      <CategoryPage />
    </Page>
  );
};

export default Category;
