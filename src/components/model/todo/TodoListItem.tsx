import clsx from "clsx";
import type { VFC } from "react";

import { CopyButton } from "~/components/ui/Button/CopyButton";
import { DeleteButton } from "~/components/ui/Button/DeleteButton";
import type { Todo } from "$/gql";

type TodoListItemProps = {
  todo: Pick<Todo, "id" | "title" | "done" | "priority">;
  categoryColor: string;
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const checkedRadioBgStyle = `checked:bg-${props.categoryColor}`;

  const doneLabelStyle = () => {
    return props.todo.done ? "text-gray-400 line-through" : "";
  };

  return (
    <div className="group flex items-center cursor-pointer">
      <input
        type="radio"
        id={`radio-${props.todo.id}`}
        className={clsx(["border-2 radio", checkedRadioBgStyle])}
        defaultChecked={props.todo.done}
      />
      <div className="flex justify-between w-full">
        <label htmlFor={`radio-${props.todo.id}`} className={clsx(["ml-2 cursor-pointer", doneLabelStyle()])}>
          {props.todo.title}
        </label>
        <div className="hidden group-hover:flex">
          <CopyButton className="mr-3" />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};
