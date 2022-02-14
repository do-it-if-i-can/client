import Image from "next/image";
import type { VFC } from "react";

import { UserIcon } from "./UserIcon";

export const Header: VFC = () => {
  return (
    <header className="px-6 h-20 sm:px-48">
      <div className="flex relative justify-center items-center h-20 sm:justify-between">
        <Image src="/images/logo.svg" width={112.47} height={24} alt="Qin Todo" />
        <UserIcon className="absolute right-0 h-9" />
      </div>
    </header>
  );
};
