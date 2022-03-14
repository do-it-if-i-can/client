import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

export const CloseIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(["w-6 h-6 text-base-content group-hover:text-primary", className])}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...otherProps}
    >
      <title>閉じるアイコン</title>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};
