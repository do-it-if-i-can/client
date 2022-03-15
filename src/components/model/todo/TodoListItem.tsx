import clsx from "clsx";
import type { VFC } from "react";

import { CopyButton, DeleteButton } from "~/components/ui/Button";
import type { Todo } from "$/gql";

type TodoListItemProps = {
  todo: Pick<Todo, "id" | "title" | "done" | "priority">;
  categoryColor: string;
};

const checkedRadioBgTheme = (categoryColor: string) => {
  return `radio-${categoryColor}`;
};

const doneLabelStyle = (done: boolean) => {
  return done ? "text-base-300 line-through" : "";
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const radioColor = checkedRadioBgTheme(props.categoryColor);
  const labelColor = doneLabelStyle(props.todo.done);

  return (
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input
          type="radio"
          id={`radio-${props.todo.id}`}
          className={clsx(["radio", radioColor])}
          defaultChecked={props.todo.done}
        />
      </div>

      <label
        htmlFor={`radio-${props.todo.id}`}
        className={clsx(["flex-1 break-words line-clamp-4 md:line-clamp-none", labelColor])}
      >
        {props.todo.title}
      </label>

      <div className="flex flex-wrap opacity-0 group-hover:opacity-100">
        <CopyButton className="mr-1 md:mr-2 lg:mr-3" />
        <DeleteButton />
      </div>
    </div>
  );
};
