import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Page from "../../src/components/Common/Page";
import { PATH_CATEGORY } from "../../src/paths";

const CategoryPage = dynamic(() => import("../../src/components/CategoryPage"));

const Categories: NextPage = () => {
  return (
    <Page title="Category" isPublic={PATH_CATEGORY.list.isPublic}>
      <CategoryPage />
    </Page>
  );
};

export default Categories;
