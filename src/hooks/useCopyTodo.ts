import { useRecoilState } from "recoil";

import type { Todo } from "~/components/model/todo/TodoListItem";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import { useCopyTodoMutation } from "$/gql";

export const useCopyTodo = (todo: Todo) => {
  const [copyTodo] = useCopyTodoMutation();
  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);

  const handleCopyTodo = async () => {
    try {
      const { data } = await copyTodo({
        variables: {
          input: {
            todoId: todo.id,
          },
        },
      });
      if (data && data.copyTodo) {
        // FIXME: refetch()に置き換える
        const todoIds = todoList.filter((t) => t).map((t) => t && t.id) as number[];
        const latestId = Math.max(...todoIds);

        const newTodoList = todoList.map((t) => {
          if (t && t.category === todo.category && t.priority >= todo.priority) {
            return { ...t, priority: t.priority + 1 };
          }
          return t;
        });

        const newTodo = {
          ...todo,
          id: latestId + 1,
        };

        setTodoList([...newTodoList, newTodo]);
      }
    } catch (e) {
      console.error(`${e}: Todoの複製に失敗しました`);
    }
  };
  return handleCopyTodo;
};
