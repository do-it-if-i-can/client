import Image from "next/image";
import type { VFC } from "react";

import { UserCircleIcon } from "~/components/ui/Assets/HeroIcon";

type AvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export const Avatar: VFC<AvatarProps> = (props) => {
  return (
    <div className={props.className}>
      {props.src ? (
        <Image src={props.src} alt={props.alt} width={36} height={36} />
      ) : (
        <UserCircleIcon className="w-9 h-9 text-base-300" />
      )}
    </div>
  );
};
