import type { ComponentPropsWithoutRef } from "react";
import type { VFC } from "react";

type DeleteIconProps = ComponentPropsWithoutRef<"svg">;

export const DeleteIcon: VFC<DeleteIconProps> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>削除のアイコン</title>
      <path
        d="M3.66669 6.41667H18.3334M17.4167 6.41667L16.6219 17.5468C16.589 18.0094 16.382 18.4422 16.0427 18.7583C15.7034 19.0743 15.2569 19.25 14.7932 19.25H7.20685C6.74315 19.25 6.29666 19.0743 5.95733 18.7583C5.618 18.4422 5.41103 18.0094 5.3781 17.5468L4.58335 6.41667H17.4167ZM9.16669 10.0833V15.5833V10.0833ZM12.8334 10.0833V15.5833V10.0833ZM13.75 6.41667V3.66667C13.75 3.42355 13.6534 3.19039 13.4815 3.01849C13.3096 2.84658 13.0765 2.75 12.8334 2.75H9.16669C8.92357 2.75 8.69041 2.84658 8.51851 3.01849C8.3466 3.19039 8.25002 3.42355 8.25002 3.66667V6.41667H13.75Z"
        stroke="#C2C6D2"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
