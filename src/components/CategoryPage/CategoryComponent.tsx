import Image from "next/image";
import Router from "next/router";

import { categoryCss } from "./css/category.css";
import DefaultIssue from "../../assets/image/default_issue.png";
import { PATH_QUESTION } from "../../paths";

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
  const onClick = (id: number) => {
    Router.push(PATH_QUESTION.detail(id).url);
  };

  return (
    <div css={categoryCss} onClick={() => onClick(data.id)}>
      <Image src={data.image || DefaultIssue} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
}
