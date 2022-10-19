import dynamic from "next/dynamic";
import { INode } from "./TreeComponent";

const TreeComponent = dynamic(() => import("./TreeComponent"), {
  suspense: true,
  ssr: false,
});

interface IProps {
  nodes: INode;
  setSelectedNode: (data: any) => void;
}

export default function Presenter({ nodes, setSelectedNode }: IProps) {
  return <TreeComponent data={nodes} setSelectedNode={setSelectedNode} />;
}
