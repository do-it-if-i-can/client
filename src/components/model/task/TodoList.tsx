import clsx from "clsx";
import type { VFC } from "react";

import type { GetTodosByUserQuery } from "$/gql";

import { AddTaskButton } from "./AddTaskButton";
import { TodoListItem } from "./TodoListItem";

type TodoListProps = {
  category: {
    label: string;
    color: string;
  };
  tasks: GetTodosByUserQuery["getTodosByUser"];
};

export const TodoList: VFC<TodoListProps> = (props) => {
  const labelColorStyle = `text-${props.category.color}`;

  return (
    <div className="py-6 sm:px-4 md:w-[calc(90%_/_3)]">
      <div className={clsx(["mb-6 w-full text-xl font-bold", labelColorStyle])}>{props.category.label}</div>
      {props.tasks.map((task) => {
        return task && <TodoListItem key={task.id} task={task} categoryColor={props.category.color} />;
      })}
      <AddTaskButton />
    </div>
  );
};
