import type { ReactNode, VFC } from "react";

import type { HeaderProps } from "./Header";
import { Header } from "./Header";

type LayoutProps = HeaderProps & {
  children: ReactNode;
  layout: "main" | "setting";
};

const checkSmartPhone = () => {
  if (typeof window !== "undefined") {
    if (window.navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return false;
    }
    return true;
  }
};

export const Layout: VFC<LayoutProps> = (props) => {
  const { children, layout, ...otherProps } = props;
  const isWebBrowser = checkSmartPhone();

  const layoutStyle =
    layout === "main" ? "px-6 md:px-10 xl:px-24" : "pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm";

  return (
    <div>
      {isWebBrowser && <Header {...otherProps} />}
      <main className={layoutStyle}>{children}</main>
    </div>
  );
};
