import dynamic from "next/dynamic";
import Page from "../../src/components/Common/Page";

const DynamicPage = dynamic(
  () => import("../../src/components/CategoryDetailPage"),
  {
    suspense: true,
  }
);

export default function CategoryDetail() {
  return (
    <Page>
      <DynamicPage />
    </Page>
  );
}
