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

export const TodoList: VFC<TodoListProps> = (props) => {
  const labelColorStyle = `text-${props.category.color}`;

  return (
    <div className="py-6 sm:px-4 md:w-[calc(90%_/_3)]">
      <div className={clsx(["mb-6 w-full text-xl font-bold", labelColorStyle])}>{props.category.label}</div>
      <div className="flex flex-col space-y-4">
        {props.todos.map((todo) => {
          return todo && <TodoListItem key={todo.id} todo={todo} categoryColor={props.category.color} />;
        })}
        <AddTodoButton />
      </div>
    </div>
  );
};
