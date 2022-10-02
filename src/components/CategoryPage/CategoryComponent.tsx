import Image from "next/image";

import { categoryCss } from "./css/category.css";
import DefaultIssue from "../../assets/image/default_issue.png";

export interface ICategoryCompoent<T> {
  id: number;
  image: null | string;
  isActive: boolean;
  isDelete: boolean;
  name: string;
  nodes: T[];
}

interface IProps<T> {
  data: ICategoryCompoent<T>;
}

export default function Category<T>({ data }: IProps<T>) {
  return (
    <div css={categoryCss}>
      <Image src={data.image || DefaultIssue} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
}
