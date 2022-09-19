// components
import ClientLayout from "./Client";

/**
 * client => end user를 위한 레이아웃
 * admin => 관리자를 위한 레이아웃
 */

export interface ILayout {
  variant?: "client" | "admin";
  children: React.ReactNode;
}

export default function Layout({ variant = "client", children }: ILayout) {
  let ReturnComponent;

  if (variant === "admin") {
    // 관리자 페이지를 위한 레이아웃
  } else {
    ReturnComponent = (
      <ClientLayout>
        <main>{children}</main>
      </ClientLayout>
    );
  }

  return (
    <>
      {ReturnComponent}
      {/* 알럿 */}
      {/* toast */}
    </>
  );
}
