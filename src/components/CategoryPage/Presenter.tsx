import CategoryComponent, { ICategoryCompoent } from "./CategoryComponent";
import { categoriesCss } from "./css/category.css";

interface IPrensenter<T> {
  categories: ICategoryCompoent<T>[] | null;
}

export default function Presenter<T>({ categories = [] }: IPrensenter<T>) {
  return (
    <ul css={categoriesCss}>
      {categories?.map((item: ICategoryCompoent<T>) => {
        if (item.isActive || !item.isDelete) {
          return (
            <li key={item?.id}>
              <CategoryComponent data={item} />
            </li>
          );
        }
      })}
    </ul>
  );
}
