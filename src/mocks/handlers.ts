import { graphql } from "msw";

import type { MutationCreateTodoArgs, QueryTodosArgs, Todo } from "../../graphql/gql";
import { Category } from "../../graphql/gql";

export const handlers = [
  graphql.query<Record<"todos", Todo[]>, QueryTodosArgs>("todos", (req, res, ctx) => {
    return res(
      ctx.data({
        todos: [
          {
            category: Category.SOMEDAY,
            createdAt: new Date(),
            description: undefined,
            done: false,
            id: "1",
            priority: 1,
            title: "おかいもの",
            updatedAt: new Date(),
            user: {
              id: "1",
              name: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        ],
      }),
    );
  }),
  graphql.mutation<Record<"createTodo", Todo>, MutationCreateTodoArgs>("createTodo", (req, res, ctx) => {
    return res(
      ctx.data({
        createTodo: {
          category: Category.SOMEDAY,
          createdAt: new Date(),
          description: undefined,
          done: false,
          id: "1",
          priority: 1,
          title: "おかいもの",
          updatedAt: new Date(),
          user: {
            id: "1",
            name: "みやさん",
            todos: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      }),
    );
  }),
];
