import Link from "next/link";
import type { VFC } from "react";

type Props = {
  children: JSX.Element;
  href: string;
};

export const IconButton: VFC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <a className="group inline-block p-2 rounded-full hover:bg-base-200">{props.children}</a>
    </Link>
  );
};
