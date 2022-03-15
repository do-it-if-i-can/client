import type { VFC } from "react";

import { PlusCircleIcon } from "~/components/ui/Assets/HeroIcon";

export const AddTodoButton: VFC = () => {
  return (
    <div className="flex items-center w-fit cursor-pointer">
      <PlusCircleIcon />
      <span className="ml-2 text-gray-400">タスクを追加する</span>
    </div>
  );
};
