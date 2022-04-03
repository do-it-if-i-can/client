import type { VFC } from "react";

import { PlusCircleIcon } from "~/components/ui/Assets/HeroIcon";

type AddTodoButtonProps = {
  onClick: () => void;
};

export const AddTodoButton: VFC<AddTodoButtonProps> = (props) => {
  return (
    <button className="flex items-center w-fit cursor-pointer" onClick={props.onClick}>
      <PlusCircleIcon />
      <span className="ml-2 text-gray-400">タスクを追加する</span>
    </button>
  );
};
