import React from "react";
import Tree from "react-d3-tree";

import style from "../css/tree.css";
import NodeComponent from "./NodeComponent";
import { useCenteredTree } from "./useCenteredTree";

export interface INode {
  name: string;
  attributes?: Record<string, string | number | boolean>;
  chilren?: INode[];
}

interface IProps {
  data: INode;
  setSelectedNode: (data: any) => void;
}

const customPathClassFunc = (data: any) => {
  return getActivateClassName(
    data.target ? data.target.data.attributes?.percent : null
  );
};

const getActivateClassName = (percent: number) => {
  return percent
    ? "active-path-" + Math.ceil(percent > 25 ? percent / 25 : 1)
    : "";
};

export default function TreeComponent({ data, setSelectedNode }: IProps) {
  const [translate, containerRef] = useCenteredTree();

  const onNodeClick = (node: any) => {
    setSelectedNode(node.data);
  };

  return (
    <div id="treeWrapper" css={style} ref={containerRef}>
      <Tree
        data={data}
        orientation="vertical"
        translate={translate}
        collapsible={false}
        renderCustomNodeElement={NodeComponent}
        rootNodeClassName="node_root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        pathClassFunc={customPathClassFunc}
        onNodeClick={onNodeClick}
      />
    </div>
  );
}
