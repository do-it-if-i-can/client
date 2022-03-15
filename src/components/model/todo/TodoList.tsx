import clsx from "clsx";
import type { VFC } from "react";

import type { GetTodosByUserQuery } from "$/gql";

import { AddTodoButton } from "./AddTodoButton";
import { TodoListItem } from "./TodoListItem";

type TodoListProps = {
  category: {
    label: string;
    color: string;
  };
  todos: GetTodosByUserQuery["getTodosByUser"];
};

const checkedTextTheme = (categoryColor: string) => {
  return `text-${categoryColor}`;
};

export const TodoList: VFC<TodoListProps> = (props) => {
  return (
    <div className="py-6 md:flex-1 md:px-2">
      <div className={clsx(["mb-6 w-full text-xl font-bold", checkedTextTheme(props.category.color)])}>
        {props.category.label}
      </div>

      <div className="flex flex-col space-y-4">
        {props.todos.map((todo) => {
          return todo && <TodoListItem key={todo.id} todo={todo} categoryColor={props.category.color} />;
        })}
        <AddTodoButton />
      </div>
    </div>
  );
};
