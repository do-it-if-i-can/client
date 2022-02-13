import Image from "next/image";
import type { VFC } from "react";

type UserIconProps = {
  src?: string;
  alt?: string;
};

export const UserIcon: VFC<UserIconProps> = (props) => {
  const src = props.src || "/images/dummy-user-icon.png";
  const alt = props.alt || "ユーザーアイコン";

  return <Image src={src} alt={alt} width={36} height={36} />;
};
