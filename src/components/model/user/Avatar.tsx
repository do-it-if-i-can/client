import Image from "next/image";
import type { VFC } from "react";
import { useRecoilValue } from "recoil";

import { UserCircleIcon } from "~/components/ui/Assets/HeroIcon";
import { currentUserState } from "~/globalStates/atoms/currentUserState";

export const Avatar: VFC = () => {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <>
      {currentUser.avatar ? (
        <Image src={currentUser.avatar} alt="ユーザーのアイコン" width={36} height={36} className="rounded-full" />
      ) : (
        <UserCircleIcon className="w-9 h-9 text-base-300" />
      )}
    </>
  );
};
