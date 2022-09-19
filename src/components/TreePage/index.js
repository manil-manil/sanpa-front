import React from "react";
import Tree from "react-d3-tree";

import style from "./css/tree.css";

const orgChart = {
  name: "그림",
  animated: true,
  attributes: {
    percent: 8.43,
  },
  children: [
    {
      name: "시점",
      attributes: {
        percent: 25.0,
      },
      children: [
        {
          name: "투시",
          attributes: {
            percent: 58.0,
          },
          children: [
            {
              name: "1점 투시",
              attributes: {
                percent: 76.3,
              },
            },
            {
              name: "2점 투시",
              attributes: {
                percent: 33,
              },
            },
          ],
        },
        {
          name: "빛",
          attributes: {
            percent: 18.7,
          },
          children: [
            {
              name: "그림자",
              attributes: {
                percent: 17.7,
              },
            },
          ],
        },
      ],
    },
  ],
};

const renderNode = (data) => {
  return (
    <>
      <circle r="5"></circle>
      <text dx="23" dy="5" className="rd3t-label__title">
        {data.nodeDatum.name}
      </text>
      {data.nodeDatum.attributes != null && (
        <text dx="23" dy="25" className="rd3t-label__attributes">
          <tspan>{data.nodeDatum.attributes.percent} %</tspan>
        </text>
      )}
    </>
  );
};

const customPathClassFunc = (data) => {
  return getActivateClassName(
    data.target ? data.target.data.attributes.percent : null
  );
};

const getActivateClassName = (percent) => {
  return percent
    ? "active-path-" + Math.ceil(percent > 25 ? percent / 25 : 1)
    : "";
};
export default function TreePage() {
  // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
  return (
    <div id="treeWrapper">
      <Tree
        css={style}
        data={orgChart}
        orientation={"vertical"}
        Collapsible={false}
        renderCustomNodeElement={renderNode}
        rootNodeClassName={"node_root"}
        branchNodeClassName={"node__branch"}
        leafNodeClassName={"node__leaf"}
        animated={true}
        // pathFunc={straightPathFunc}
        pathClassFunc={customPathClassFunc}
        // nodeSize={{x:50,y:50}}
      />
    </div>
  );
}
