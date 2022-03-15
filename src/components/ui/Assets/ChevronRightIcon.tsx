import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

export const ChevronRightIcon: VFC<Props> = ({ className, ...otherProps }) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};
