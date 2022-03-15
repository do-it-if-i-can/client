import type { ReactNode, VFC } from "react";

import type { HeaderProps } from "./Header";
import { Header } from "./Header";

type LayoutProps = HeaderProps & {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div>
      <Header {...otherProps} />
      <main>{children}</main>
    </div>
  );
};
