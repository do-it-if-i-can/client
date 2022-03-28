import type { VFC } from "react";
import { useRecoilState } from "recoil";

import { TrashIcon } from "~/components/ui/Assets/HeroIcon";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import { useDeleteTodoMutation } from "$/gql";

type DeleteButtonProps = {
  className?: string;
  todoId: number;
};

export const DeleteButton: VFC<DeleteButtonProps> = ({ className, todoId }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);

  const handleDeleteTodo = async () => {
    try {
      const { data } = await deleteTodo({
        variables: {
          input: {
            todoId: todoId,
          },
        },
      });
      if (data && data.deleteTodo) {
        const newTodoList = todoList.filter((t) => t && t.id !== todoId);
        setTodoList(newTodoList);
      }
    } catch (e) {
      console.error(`${e}: Todoの削除に失敗しました`);
    }
  };

  return (
    <button className={className} onClick={handleDeleteTodo}>
      <TrashIcon className="group-hover:text-base-300" />
    </button>
  );
};
