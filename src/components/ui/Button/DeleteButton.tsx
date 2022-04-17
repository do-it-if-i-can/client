import type { VFC } from "react";

import { TrashIcon } from "~/components/ui/Assets/HeroIcon";
import { useDeleteTodo } from "~/hooks";

type DeleteButtonProps = {
  className?: string;
  todoId: number;
};

export const DeleteButton: VFC<DeleteButtonProps> = ({ className, todoId }) => {
  const handleDeleteTodo = useDeleteTodo(todoId);

  return (
    <button className={className} onClick={handleDeleteTodo}>
      <TrashIcon className="group-hover:text-base-300" />
    </button>
  );
};
