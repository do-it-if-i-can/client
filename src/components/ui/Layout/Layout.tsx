import type { ReactNode, VFC } from "react";

import type { HeaderProps } from "./Header";
import { Header } from "./Header";

type LayoutProps = HeaderProps & {
  children: ReactNode;
  layout: "main" | "setting";
};

export const Layout: VFC<LayoutProps> = (props) => {
  const { children, layout, ...otherProps } = props;
  const layoutStyle =
    layout === "main" ? "px-6 md:px-10 xl:px-24" : "pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm";

  return (
    <div>
      <Header {...otherProps} />
      <main className={layoutStyle}>{children}</main>
    </div>
  );
};
