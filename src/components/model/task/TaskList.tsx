import clsx from "clsx";
import type { VFC } from "react";

import { AddTaskButton } from "./AddTaskButton";

type TaskListProps = {
  categoryObj: {
    label: string;
    color: string;
  };
};

export const TaskList: VFC<TaskListProps> = (props) => {
  return (
    <div className="py-6 sm:px-4 md:w-[calc(100%_/_3)]">
      <div className={clsx(["mb-6 w-full text-xl font-bold", props.categoryObj.color])}>{props.categoryObj.label}</div>
      <AddTaskButton />
    </div>
  );
};
