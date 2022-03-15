import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import { forwardRef } from "react";

type Props = {
  href?: string;
  type?: "link" | "button";
  children: ReactNode;
  handleClick?: () => void;
};

const sectionListStyle = "flex justify-between items-center h-14 px-6 w-full text-base font-bold md:p-4";
const sectionListHoverStyle = "hover:bg-base-200";

export const SectionListItem = forwardRef<HTMLButtonElement | HTMLDivElement, Props>(
  ({ type = "div", href, children, handleClick }, ref) => {
    if (href) {
      return (
        <Link href={href}>
          <a className={clsx([sectionListStyle, sectionListHoverStyle])}>{children}</a>
        </Link>
      );
    }

    if (type === "button") {
      return (
        <button {...ref} className={clsx([sectionListStyle, sectionListHoverStyle])} onClick={handleClick}>
          {children}
        </button>
      );
    }

    return (
      <div {...ref} className={sectionListStyle}>
        {children}
      </div>
    );
  },
);
