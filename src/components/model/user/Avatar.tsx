import Image from "next/image";
import type { VFC } from "react";
import { useRecoilValue } from "recoil";

import { UserCircleIcon } from "~/components/ui/Assets/HeroIcon";
import { currentUserState } from "~/globalStates/atoms/currentUserState";

type AvatarProps = {
  className?: string;
};

export const Avatar: VFC<AvatarProps> = (props) => {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className={props.className}>
      {currentUser.avatar ? (
        <Image src={currentUser.avatar} alt="ユーザーのアイコン" width={36} height={36} />
      ) : (
        <UserCircleIcon className="w-9 h-9 text-base-300" />
      )}
    </div>
  );
};
