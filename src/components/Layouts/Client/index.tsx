import React from "react";
import { ILayout } from "..";

export default function ClientLayout({ children }: ILayout) {
  return (
    <>
      {/* header */}
      {children}
      {/* footer */}
    </>
  );
}
