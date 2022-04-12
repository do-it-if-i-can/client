import type { ReactNode, VFC } from "react";

import { MobileTodoInput } from "~/components/model/todo";

import type { HeaderProps } from "./Header";
import { Header } from "./Header";

type LayoutProps = HeaderProps & {
  children: ReactNode;
  layout: "main" | "setting";
};

const checkWebBrowser = () => {
  if (typeof window === "undefined") return false;
  return !window.navigator.userAgent.match(/iPhone|Android.+Mobile/);
};

// const checkSmartPhoneDeviceWidth = () => {
//   if (typeof window === "undefined") return false;
//   return window.matchMedia("(max-device-width: 640px)").matches;
// };

export const Layout: VFC<LayoutProps> = (props) => {
  const { children, layout, ...otherProps } = props;
  const isWebBrowser = checkWebBrowser();
  // const isSmartPhone = checkSmartPhoneDeviceWidth();

  const layoutStyle =
    layout === "main" ? "px-6 md:px-10 xl:px-24" : "pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm";

  return (
    <div className="relative">
      {isWebBrowser && <Header {...otherProps} />}
      <main className={layoutStyle}>{children}</main>
      <MobileTodoInput />
    </div>
  );
};
