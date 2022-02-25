import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type CopyIconProps = ComponentPropsWithoutRef<"svg">;

export const CopyIcon: VFC<CopyIconProps> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>コピーのアイコン</title>
      <path
        d="M7.33335 14.6666H5.50002C5.01379 14.6666 4.54747 14.4735 4.20366 14.1297C3.85984 13.7858 3.66669 13.3195 3.66669 12.8333V5.49996C3.66669 5.01373 3.85984 4.54741 4.20366 4.2036C4.54747 3.85978 5.01379 3.66663 5.50002 3.66663H12.8334C13.3196 3.66663 13.7859 3.85978 14.1297 4.2036C14.4735 4.54741 14.6667 5.01373 14.6667 5.49996V7.33329M9.16669 18.3333H16.5C16.9863 18.3333 17.4526 18.1401 17.7964 17.7963C18.1402 17.4525 18.3334 16.9862 18.3334 16.5V9.16663C18.3334 8.6804 18.1402 8.21408 17.7964 7.87026C17.4526 7.52645 16.9863 7.33329 16.5 7.33329H9.16669C8.68046 7.33329 8.21414 7.52645 7.87033 7.87026C7.52651 8.21408 7.33335 8.6804 7.33335 9.16663V16.5C7.33335 16.9862 7.52651 17.4525 7.87033 17.7963C8.21414 18.1401 8.68046 18.3333 9.16669 18.3333Z"
        stroke="#C2C6D2"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};