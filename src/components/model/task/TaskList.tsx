import clsx from "clsx";
import type { VFC } from "react";
import { useMemo } from "react";

import type { Category } from "~/types/task";

import { AddTaskButton } from "./AddTaskButton";

const categoryTable: {
  [category: string]: {
    label: string;
    color: string;
  };
} = {
  today: {
    color: "text-rose-500",
    label: "今日する",
  },
  tomorrow: {
    color: "text-orange-400",
    label: "明日する",
  },
  ever: {
    color: "text-amber-400",
    label: "今度する",
  },
};

type TaskListProps = {
  category: Category;
};

export const TaskList: VFC<TaskListProps> = (props) => {
  const { categoryColor, categoryLabel } = useMemo(() => {
    return {
      categoryColor: categoryTable[props.category]["color"],
      categoryLabel: categoryTable[props.category]["label"],
    };
  }, [props.category]);

  return (
    <div className="py-6 sm:px-4 md:w-[calc(100%_/_3)]">
      <div className={clsx(["mb-6 w-full text-xl font-bold", categoryColor])}>{categoryLabel}</div>
      <AddTaskButton />
    </div>
  );
};
