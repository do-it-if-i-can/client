import { ChevronLeftIcon as ChevronLeft } from "@heroicons/react/outline";
import { ChevronRightIcon as ChevronRight } from "@heroicons/react/outline";
import { CogIcon as Cog } from "@heroicons/react/outline";
import { DuplicateIcon as Duplicate } from "@heroicons/react/outline";
import { ExternalLinkIcon as ExternalLink } from "@heroicons/react/outline";
import { LogoutIcon as Logout } from "@heroicons/react/outline";
import { PlusIcon as Plus } from "@heroicons/react/outline";
import { XIcon as X } from "@heroicons/react/outline";
import { TrashIcon as Trash } from "@heroicons/react/outline";
import { UserCircleIcon as UserCircle } from "@heroicons/react/solid";
import { PlusCircleIcon as PlusCircle } from "@heroicons/react/solid";
import clsx from "clsx";
import type { ComponentProps, VFC } from "react";
import React from "react";

const defaultStyle = "w-6 h-6 text-base-content group-hover:text-primary";

type Props = ComponentProps<"svg">;

export const ChevronLeftIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronLeft className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronRightIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronRight className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const CogIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Cog className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const DuplicateIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Duplicate className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ExternalLinkIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ExternalLink className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const LogoutIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Logout className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const PlusIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Plus className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const UserCircleIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <UserCircle className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const CloseIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <X className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const PlusCircleIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <PlusCircle className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const TrashIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Trash className={clsx([defaultStyle, className])} {...otherProps} />;
};
