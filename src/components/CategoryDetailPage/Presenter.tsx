import dynamic from "next/dynamic";
import { INode } from "./TreeComponent";

const TreeComponent = dynamic(() => import("./TreeComponent"), {
  suspense: true,
  ssr: false,
});

interface IProps {
  nodes: INode;
}

export default function Presenter({ nodes }: IProps) {
  return <TreeComponent data={nodes} />;
}
