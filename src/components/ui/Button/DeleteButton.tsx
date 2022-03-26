import type { VFC } from "react";
import { useRecoilState } from "recoil";

import type { Todo } from "~/components/model/todo/TodoListItem";
import { TrashIcon } from "~/components/ui/Assets/HeroIcon";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import { useDeleteTodoMutation } from "$/gql";

type DeleteButtonProps = {
  className?: string;
  todo: Todo;
};

export const DeleteButton: VFC<DeleteButtonProps> = ({ className, todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);

  const handleClick = async () => {
    try {
      const { data } = await deleteTodo({
        variables: {
          input: {
            todoId: todo.id,
          },
        },
      });
      if (data && data.deleteTodo) {
        const newTodoList = todoList.filter((t) => t && t.id !== todo.id);
        setTodoList(newTodoList);
      }
    } catch (e) {
      console.error(`${e}: Todoの削除に失敗しました`);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      <TrashIcon className="group-hover:text-base-300" />
    </div>
  );
};
