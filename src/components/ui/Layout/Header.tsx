import clsx from "clsx";
import type { VFC } from "react";

import { Avatar } from "~/components/model/user/Avatar";
import { ChevronLeftIcon } from "~/components/ui/Assets/HeroIcon";
import { CloseIcon } from "~/components/ui/Assets/HeroIcon";
import { Logo } from "~/components/ui/Assets/Logo";
import { IconButton } from "~/components/ui/Button/IconButton";
import { AvatarMenu } from "~/components/ui/Menu/AvatarMenu";
import { useIsPage } from "~/hooks/useIsPage";

export type HeaderProps = {
  centerTitle?: string;
};

export const Header: VFC<HeaderProps> = (props) => {
  const isSettingPage = useIsPage("/setting");

  return (
    <header className="px-4 w-full md:px-20 lg:px-40">
      <div
        className={clsx([
          "flex relative justify-center items-center mx-auto h-20 md:max-w-screen-lg lg:max-w-screen-xl",
          props.centerTitle ? "" : "md:justify-between",
        ])}
      >
        {props.centerTitle ? (
          <div className="absolute left-0">
            <IconButton href={isSettingPage ? "/" : "/setting"}>
              {isSettingPage ? <CloseIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
        ) : null}

        {props.centerTitle ? <h1 className="text-lg font-bold text-base-content">{props.centerTitle}</h1> : <Logo />}

        {!props.centerTitle ? (
          <div className="absolute right-0">
            <AvatarMenu>
              <Avatar />
            </AvatarMenu>
          </div>
        ) : null}
      </div>
    </header>
  );
};
