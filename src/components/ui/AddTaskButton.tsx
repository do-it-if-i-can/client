import type { VFC } from "react";

import { PlusIcon } from "./Assets/PlusIcon";

export const AddTaskButton: VFC = () => {
  return (
    <div className="flex items-center">
      <PlusIcon />
      <span className="ml-2 leading-6 text-gray-400">タスクを追加する</span>
    </div>
  );
};
