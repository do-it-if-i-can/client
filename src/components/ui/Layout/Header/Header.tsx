import clsx from "clsx";
import { useRouter } from "next/router";
import type { VFC } from "react";

import { Avatar } from "~/components/model/user/Avatar";
import { ChevronLeftIcon } from "~/components/ui/Assets/ChevronLeftIcon";
import { CloseIcon } from "~/components/ui/Assets/CloseIcon";
import { Logo } from "~/components/ui/Assets/Logo";
import { IconButton } from "~/components/ui/Button/IconButton";

export type HeaderProps = {
  title?: string;
};

const useIsPage = (...path: string[]) => {
  const router = useRouter();
  return path.includes(router.pathname);
};

export const Header: VFC<HeaderProps> = ({ title }) => {
  const isSettingPage = useIsPage("/setting");

  return (
    <header className="px-4 w-full md:px-20 lg:px-40">
      <div
        className={clsx([
          "flex relative justify-center items-center mx-auto h-20 md:max-w-screen-lg lg:max-w-screen-xl",
          title ? "" : "md:justify-between",
        ])}
      >
        {title ? (
          <div className="absolute left-0">
            <IconButton href={isSettingPage ? "/" : "/setting"}>
              {isSettingPage ? <CloseIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
        ) : null}

        {title ? <h1 className="text-lg font-bold text-base-content">{title}</h1> : <Logo />}

        {!title ? <Avatar className="absolute right-0" /> : null}
      </div>
    </header>
  );
};
