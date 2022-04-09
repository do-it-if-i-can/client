import clsx from "clsx";
import type { VFC } from "react";

import { CopyButton, DeleteButton } from "~/components/ui/Button";
import type { Todo as GqlTodo } from "$/gql";

export type Todo = Pick<GqlTodo, "id" | "category" | "title" | "done" | "priority">;

type TodoListItemProps = {
  todo: Todo;
  categoryColor: string;
  onDoneChange: (todo: Todo) => void;
  onLabelClick: (todo: Todo) => void;
};

const checkedRadioBgTheme = (categoryColor: string) => {
  return `radio-${categoryColor}`;
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const radioColor = checkedRadioBgTheme(props.categoryColor);
  const labelColor = props.todo.done ? "text-base-300 line-through" : "";
  const MAX_LENGTH_OF_TITLE = 200;

  const tooltipText = () => {
    return props.todo.title.length > MAX_LENGTH_OF_TITLE ? props.todo.title : "";
  };

  const displayTitle = () => {
    return props.todo.title.length > MAX_LENGTH_OF_TITLE
      ? props.todo.title.substr(0, MAX_LENGTH_OF_TITLE) + "..."
      : props.todo.title;
  };

  return (
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input
          type="radio"
          className={clsx(["radio", radioColor])}
          checked={props.todo.done}
          onClick={() => props.onDoneChange(props.todo)}
          readOnly
        />
      </div>

      <label
        title={tooltipText()}
        onClick={() => props.onLabelClick(props.todo)}
        className={clsx(["flex-1 break-words line-clamp-4 md:line-clamp-none", labelColor])}
      >
        {displayTitle()}
      </label>

      <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 md:gap-2 lg:gap-3">
        <CopyButton todo={props.todo} />
        <DeleteButton todoId={props.todo.id} />
      </div>
    </div>
  );
};
