import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type DummyAvatarProps = ComponentPropsWithoutRef<"svg">;

export const DummyAvatar: VFC<DummyAvatarProps> = ({ className, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(["w-6 h-6 text-base-content group-hover:text-primary", className])}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
