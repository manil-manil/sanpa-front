import { css } from "@emotion/react";

export const categoryCss = css`
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  img {
    max-width: 300px !important;
  }
`;

export const categoriesCss = css`
  display: flex;
`;
