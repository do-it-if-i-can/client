import type { VFC } from "react";

import { TrashIcon } from "~/components/ui/Assets/HeroIcon";

type DeleteButtonProps = {
  className?: string;
};

export const DeleteButton: VFC<DeleteButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <TrashIcon className="group-hover:text-base-300" />
    </div>
  );
};
