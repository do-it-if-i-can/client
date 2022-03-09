import clsx from "clsx";
import type { VFC } from "react";

import { CopyButton } from "~/components/ui/Button/CopyButton";
import { DeleteButton } from "~/components/ui/Button/DeleteButton";

type TodoListItemProps = {
  task: {
    id: number;
    title: string;
    done: boolean;
    priority: number;
  };
  categoryColor: string;
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const checkedRadioBgStyle = `checked:bg-${props.categoryColor}`;

  const doneLabelStyle = () => {
    return props.task.done ? "text-gray-400 line-through" : "";
  };

  return (
    <div className="group flex items-center mb-4 cursor-pointer">
      <input
        type="radio"
        id={`radio-${props.task.id}`}
        className={clsx(["border-2 radio", checkedRadioBgStyle])}
        defaultChecked={props.task.done}
      />
      <div className="flex justify-between w-full">
        <label htmlFor={`radio-${props.task.id}`} className={clsx(["ml-2 cursor-pointer", doneLabelStyle()])}>
          {props.task.title}
        </label>
        <div className="hidden group-hover:flex">
          <CopyButton className="mr-3" />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};
