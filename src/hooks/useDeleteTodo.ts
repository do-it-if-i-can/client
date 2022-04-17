import { useRecoilState } from "recoil";

import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import { useDeleteTodoMutation } from "$/gql";

export const useDeleteTodo = (todoId: number) => {
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

  return handleDeleteTodo;
};
