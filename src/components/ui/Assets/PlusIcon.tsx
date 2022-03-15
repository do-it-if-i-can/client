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
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );
};
