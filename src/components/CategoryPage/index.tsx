import useCategory from "../../hooks/useCategory";
import Presenter from "./Presenter";

export default function CategoryPage() {
  const categories = useCategory();

  return <Presenter categories={categories} />;
}
