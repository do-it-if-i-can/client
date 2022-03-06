import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonType>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <button type="button" ref={ref} {...rest} className={className}>
      {children}
    </button>
  );
});
