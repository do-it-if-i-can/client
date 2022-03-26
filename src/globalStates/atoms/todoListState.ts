import { atom } from "recoil";

import type { GetTodosByUserQuery } from "$/gql";

export type TodoListState = GetTodosByUserQuery["getTodosByUser"];

export const todoListState = atom<TodoListState>({
  key: "todoListState",
  default: [],
});
