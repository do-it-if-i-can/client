import Image from "next/image";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="flex justify-between items-center px-48 h-20">
      <Image src="/images/logo.svg" width={112.47} height={24} alt="Qin Todo" />
      <Image src="/images/user-icon-sample.png" width={36} height={36} alt="ユーザー" />
    </header>
  );
};
