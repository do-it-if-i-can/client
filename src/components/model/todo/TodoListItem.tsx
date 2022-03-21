import clsx from "clsx";
import type { VFC } from "react";

import { CopyButton, DeleteButton } from "~/components/ui/Button";
import type { Todo as GqlTodo } from "$/gql";

export type Todo = Pick<GqlTodo, "id" | "category" | "title" | "done" | "priority">;

type TodoListItemProps = {
  todo: Todo;
  categoryColor: string;
  onDoneChange: (todo: Todo) => void;
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
          checked={props.todo.done}
          onClick={() => props.onDoneChange(props.todo)}
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
