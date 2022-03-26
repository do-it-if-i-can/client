import { selectorFamily } from "recoil";

import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import type { Category } from "$/gql";

export const categorizedTodoListState = selectorFamily<TodoListState, Category>({
  key: "categorizedTodoListState",
  get:
    (category: Category) =>
    ({ get }) => {
      const todoList: TodoListState = get(todoListState);

      return (todoList || [])
        .filter((todo) => todo?.category === category)
        .sort((a, b) => (a && b ? b.priority - a.priority : 0));
    },
});
