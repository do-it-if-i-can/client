import type { ReactNode, VFC } from "react";

import { Header } from "./Header/Header";

type LayoutProps = { children: ReactNode };

export const Layout: VFC<LayoutProps> = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};
