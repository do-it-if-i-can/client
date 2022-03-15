import type { VFC } from "react";

import { DeleteIcon } from "~/components/ui/Assets/icons";

type DeleteButtonProps = {
  className?: string;
};

export const DeleteButton: VFC<DeleteButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <DeleteIcon />
    </div>
  );
};
