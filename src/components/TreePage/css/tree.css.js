import { css } from "@emotion/react";

export default css`
  #treeWrapper {
    width: 100vw;
    height: 100vh;
    background-color: rgb(34, 34, 34);
    .rd3t-label__title {
      stroke: #fff;
      font-weight: 100 !important;
    }
    .rd3t-node {
      stroke-width: 1;
    }
  }
  .rd3t-link {
    fill: #fff;
  }
  .node__root > circle {
    fill: red;
  }

  .node__branch > circle {
    fill: yellow;
  }

  .node__leaf > circle {
    fill: green;
    /* Let's also make the radius of leaf nodes larger */
    r: 15;
  }
  .active-path {
    &-1 {
      stroke: white !important;
      opacity: 0.2 !important;
    }
    &-2 {
      stroke: green !important;
      opacity: 0.5 !important;
    }
    &-3 {
      stroke: green !important;
      opacity: 0.8 !important;
    }
    &-4 {
      stroke: green !important;
      opacity: 1 !important;
      stroke-width: 3;
    }
  }
`;
