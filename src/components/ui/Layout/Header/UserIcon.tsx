import Image from "next/image";
import type { VFC } from "react";

import { DummyUserIcon } from "~/components/ui/Assets/DummyUserIcon";

type UserIconProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export const UserIcon: VFC<UserIconProps> = (props) => {
  return (
    <div className={props.className}>
      {props.src ? <Image src={props.src} alt={props.alt} width={36} height={36} /> : <DummyUserIcon />}
    </div>
  );
};
