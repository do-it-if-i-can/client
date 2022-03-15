import type { VFC } from "react";

import { PlusIcon } from "~/components/ui/Assets/icons";

export const AddTodoButton: VFC = () => {
  return (
    <div className="flex items-center w-fit cursor-pointer">
      <PlusIcon />
      <span className="ml-2 text-gray-400">タスクを追加する</span>
    </div>
  );
};
