import type { VFC } from "react";

import { Logo } from "~/components/ui/Assets/Logo";

import { UserIcon } from "./UserIcon";

export const Header: VFC = () => {
  return (
    <header className="px-6 h-20 sm:px-48">
      <div className="flex relative justify-center items-center h-20 sm:justify-between">
        <Logo />
        <UserIcon className="absolute right-0 h-9" />
      </div>
    </header>
  );
};
