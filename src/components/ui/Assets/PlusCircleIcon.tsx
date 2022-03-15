import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type PlusIconProps = ComponentPropsWithoutRef<"svg">;

export const PlusIcon: VFC<PlusIconProps> = ({ className, ...otherProps }) => {
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
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
