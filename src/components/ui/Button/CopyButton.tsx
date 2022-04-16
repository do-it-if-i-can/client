import type { VFC } from "react";

import type { Todo } from "~/components/model/todo/TodoListItem";
import { DuplicateIcon } from "~/components/ui/Assets/HeroIcon";
import { useCopyTodo } from "~/hooks";

type CopyButtonProps = {
  className?: string;
  todo: Todo;
};

export const CopyButton: VFC<CopyButtonProps> = (props) => {
  const handleCopyTodo = useCopyTodo(props.todo);

  return (
    <button className={props.className} onClick={handleCopyTodo}>
      <DuplicateIcon className="group-hover:text-base-300" />
    </button>
  );
};
