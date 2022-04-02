import clsx from "clsx";
import type { VFC } from "react";
import { useRef, useState } from "react";

import type { Todo } from "~/components/model/todo/TodoListItem";
import type { GetTodosByUserQuery } from "$/gql";

import { AddTodoButton, TodoListItem } from ".";
import { TodoInput } from "./TodoInput";

type TodoListProps = {
  category: {
    label: string;
    color: string;
  };
  todoList: GetTodosByUserQuery["getTodosByUser"];
  onDoneChange: (todo: Todo) => void;
};

const checkedTextTheme = (categoryColor: string) => {
  return `text-${categoryColor}`;
};

export const TodoList: VFC<TodoListProps> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [todoInputDisplayState, setTodoInputDisplayState] = useState(false);

  const handleClickAddTodoButton = async () => {
    await setTodoInputDisplayState(true);
    todoInputRef.current && todoInputRef.current.focus();
  };

  const handleBlurTodoInput = () => {
    setTodoInputDisplayState(false);
  };

  return (
    <div className="py-6 md:flex-1 md:px-2">
      <div className={clsx(["mb-6 w-full text-xl font-bold", checkedTextTheme(props.category.color)])}>
        {props.category.label}
      </div>

      <div className="flex flex-col space-y-4">
        {props.todoList.map((todo) => {
          return (
            todo && (
              <TodoListItem
                key={todo.id}
                todo={todo}
                categoryColor={props.category.color}
                onDoneChange={props.onDoneChange}
              />
            )
          );
        })}
        <AddTodoButton onClick={handleClickAddTodoButton} className={todoInputDisplayState ? "hidden" : ""} />
        <TodoInput
          ref={todoInputRef}
          onBlur={handleBlurTodoInput}
          categoryColor={props.category.color}
          className={todoInputDisplayState ? "" : "hidden"}
        />
      </div>
    </div>
  );
};
