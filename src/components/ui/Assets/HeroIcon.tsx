import { ChevronLeftIcon as ChevronLeft } from "@heroicons/react/outline";
import { ChevronRightIcon as ChevronRight } from "@heroicons/react/outline";
import { ChevronDownIcon as ChevronDown } from "@heroicons/react/outline";
import { ChevronUpIcon as ChevronUp } from "@heroicons/react/outline";
import { CogIcon as Cog } from "@heroicons/react/outline";
import { DuplicateIcon as Duplicate } from "@heroicons/react/outline";
import { ExternalLinkIcon as ExternalLink } from "@heroicons/react/outline";
import { LogoutIcon as Logout } from "@heroicons/react/outline";
import { PlusIcon as Plus } from "@heroicons/react/outline";
import { XIcon as X } from "@heroicons/react/outline";
import { TrashIcon as Trash } from "@heroicons/react/outline";
import { UserCircleIcon as UserCircle } from "@heroicons/react/solid";
import { PlusCircleIcon as PlusCircle } from "@heroicons/react/solid";
import { CheckIcon as Check } from "@heroicons/react/solid";
import { ChevronDoubleUpIcon as ChevronDoubleUp } from "@heroicons/react/solid";
import { ChevronDoubleDownIcon as ChevronDoubleDown } from "@heroicons/react/solid";
import { RefreshIcon as Refresh } from "@heroicons/react/solid";
import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

const defaultStyle = "w-6 h-6 text-base-content group-hover:text-primary";

type Props = ComponentProps<"svg">;

export const ChevronLeftIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronLeft className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronRightIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronRight className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronUpIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronUp className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronDownIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronDown className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronDoubleUpIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronDoubleUp className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const ChevronDoubleDownIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <ChevronDoubleDown className={clsx([defaultStyle, className])} {...otherProps} />;
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
  return <UserCircle className={className} {...otherProps} />;
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

export const CheckIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Check className={clsx([defaultStyle, className])} {...otherProps} />;
};

export const RefreshIcon: VFC<Props> = ({ className, ...otherProps }) => {
  return <Refresh className={clsx([defaultStyle, className])} {...otherProps} />;
};
