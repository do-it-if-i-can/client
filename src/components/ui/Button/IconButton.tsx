import Link from "next/link";
import type { VFC } from "react";

type Props = {
  children: JSX.Element;
  href: string;
};

export const IconButton: VFC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="group inline-block p-2 rounded-full outline-primary hover:bg-base-200">{children}</a>
    </Link>
  );
};
