import type { VFC } from "react";

import { Avatar } from "~/components/model/user/Avatar";
import { Logo } from "~/components/ui/Assets/Logo";

export const Header: VFC = () => {
  return (
    <header className="px-6 h-20 md:px-24">
      <div className="flex relative justify-center items-center mx-auto max-w-screen-lg h-full md:justify-between">
        <Logo />
        <Avatar className="absolute right-0 h-9" />
      </div>
    </header>
  );
};
