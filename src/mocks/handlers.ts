import { graphql } from "msw";

import type {
  MutationCreateTodoArgs,
  MutationUpdateTodoDoneArgs,
  QueryGetTodosByCategoryArgs,
  QueryGetTodosByUserArgs,
  Todo,
} from "$/gql";
import { Category } from "$/gql";

export const handlers = [
  graphql.query<Record<"getTodosByCategory", Todo[]>, QueryGetTodosByCategoryArgs>(
    "getTodosByCategory",
    (req, res, ctx) => {
      let todos: Todo[];

      switch (req.variables.input.category) {
        case Category.TODAY:
          todos = [
            {
              category: Category.TODAY,
              createdAt: new Date(),
              description: undefined,
              done: true,
              id: 1,
              priority: 1,
              title: "じゃがいもを買う",
              updatedAt: new Date(),
              user: {
                id: "1",
                userName: "miyasan",
                displayName: "みやさん",
                todos: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                __typename: "User",
              },
              __typename: "Todo",
            },
            {
              category: Category.TODAY,
              createdAt: new Date(),
              description: undefined,
              done: false,
              id: 3,
              priority: 2,
              title: "たまねぎを買う",
              updatedAt: new Date(),
              user: {
                id: "1",
                userName: "miyasan",
                displayName: "みやさん",
                todos: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                __typename: "User",
              },
              __typename: "Todo",
            },
          ];
          break;
        case Category.TOMORROW:
          todos = [
            {
              category: Category.TOMORROW,
              createdAt: new Date(),
              description: undefined,
              done: false,
              id: 2,
              priority: 2,
              title: "にんじんを買う",
              updatedAt: new Date(),
              user: {
                id: "1",
                userName: "miyasan",
                displayName: "みやさん",
                todos: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                __typename: "User",
              },
              __typename: "Todo",
            },
            {
              category: Category.TOMORROW,
              createdAt: new Date(),
              description: undefined,
              done: false,
              id: 4,
              priority: 1,
              title: "牛肉を買う",
              updatedAt: new Date(),
              user: {
                id: "1",
                userName: "miyasan",
                displayName: "みやさん",
                todos: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                __typename: "User",
              },
              __typename: "Todo",
            },
          ];
          break;
        case Category.SOMEDAY:
          todos = [
            {
              category: Category.SOMEDAY,
              createdAt: new Date(),
              description: undefined,
              done: true,
              id: 5,
              priority: 1,
              title: "カレーのルーを買う",
              updatedAt: new Date(),
              user: {
                id: "1",
                userName: "miyasan",
                displayName: "みやさん",
                todos: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                __typename: "User",
              },
              __typename: "Todo",
            },
          ];
          break;
      }

      return res(
        ctx.data({
          getTodosByCategory: todos,
        }),
      );
    },
  ),

  graphql.query<Record<"getTodosByUser", Todo[]>, QueryGetTodosByUserArgs>("getTodosByUser", (req, res, ctx) => {
    return res(
      ctx.data({
        getTodosByUser: [
          {
            category: Category.TODAY,
            createdAt: new Date(),
            description: undefined,
            done: true,
            id: 1,
            priority: 1,
            title: "じゃがいもを買う",
            updatedAt: new Date(),
            user: {
              id: "1",
              userName: "miyasan",
              displayName: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
              __typename: "User",
            },
            __typename: "Todo",
          },
          {
            category: Category.TODAY,
            createdAt: new Date(),
            description: undefined,
            done: false,
            id: 3,
            priority: 2,
            title: "たまねぎを買う",
            updatedAt: new Date(),
            user: {
              id: "1",
              userName: "miyasan",
              displayName: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
              __typename: "User",
            },
            __typename: "Todo",
          },
          {
            category: Category.TOMORROW,
            createdAt: new Date(),
            description: undefined,
            done: false,
            id: 2,
            priority: 2,
            title: "にんじんを買う",
            updatedAt: new Date(),
            user: {
              id: "1",
              userName: "miyasan",
              displayName: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
              __typename: "User",
            },
            __typename: "Todo",
          },
          {
            category: Category.TOMORROW,
            createdAt: new Date(),
            description: undefined,
            done: false,
            id: 4,
            priority: 1,
            title: "牛肉を買う",
            updatedAt: new Date(),
            user: {
              id: "1",
              userName: "miyasan",
              displayName: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
              __typename: "User",
            },
            __typename: "Todo",
          },
          {
            category: Category.SOMEDAY,
            createdAt: new Date(),
            description: undefined,
            done: true,
            id: 5,
            priority: 1,
            title: "カレーのルーを買う",
            updatedAt: new Date(),
            user: {
              id: "1",
              userName: "miyasan",
              displayName: "みやさん",
              todos: [],
              createdAt: new Date(),
              updatedAt: new Date(),
              __typename: "User",
            },
            __typename: "Todo",
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
            userName: "miyasan",
            displayName: "みやさん",
            todos: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      }),
    );
  }),

  graphql.mutation<Record<"updateTodoDone", boolean>, MutationUpdateTodoDoneArgs>("updateTodoDone", (req, res, ctx) => {
    return res(
      ctx.data({
        updateTodoDone: true,
      }),
    );
  }),
];
