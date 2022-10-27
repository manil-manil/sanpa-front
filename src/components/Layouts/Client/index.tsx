import React from "react";
import style from "../client.css";
import { menuJson } from "../../../utils/json/menu.json";
import Navigation from "../Navigation";
import { ILayout } from "..";

export default function ClientLayout({ children }: ILayout) {
  return (
    <div css={style}>
      {/* header */}
      <Navigation list={menuJson} />
      {children}
      {/* footer */}
    </div>
  );
}
