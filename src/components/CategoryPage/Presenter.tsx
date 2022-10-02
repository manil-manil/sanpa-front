import CategoryComponent, { ICategoryCompoent } from "./CategoryComponent";
import { categoriesCss } from "./css/category.css";

interface IPrensenter<T> {
  categories: ICategoryCompoent<T>[] | null;
  route: (id: number) => void;
}

export default function Presenter<T>({
  categories = [],
  route,
}: IPrensenter<T>) {
  return (
    <ul css={categoriesCss}>
      {categories?.map((item: ICategoryCompoent<T>) => {
        if (item.isActive || !item.isDelete) {
          return (
            <li key={item?.id} onClick={() => route(item.id)}>
              <CategoryComponent data={item} />
            </li>
          );
        }
      })}
    </ul>
  );
}
