import clsx from "clsx";
import type { KeyboardEvent, VFC } from "react";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

import type { Todo } from "~/components/model/todo/TodoListItem";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import type { Category, GetTodosByUserQuery } from "$/gql";
import { useCreateTodoMutation } from "$/gql";

import { AddTodoButton, TodoListItem } from ".";
import { TodoInput } from "./TodoInput";

type TodoListProps = {
  categoryObject: {
    category: Category;
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputDisplayState, setInputDisplayState] = useState(false);
  const [inputValueState, setInputValueState] = useState("");

  const [createTodo] = useCreateTodoMutation();
  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);

  const createTodoAndSetTodoList = async () => {
    if (!inputRef.current) return;
    if (!inputRef.current.value) {
      setInputDisplayState(false);
      return;
    }

    try {
      const { data } = await createTodo({
        variables: {
          input: {
            category: props.categoryObject.category,
            title: inputRef.current.value,
            // FIXME: userIdをログイン中のユーザーのIDにする
            userId: "1",
          },
        },
      });
      if (data && data.createTodo) {
        // FIXME: refetch()に置き換える
        const todoIds = todoList.filter((t) => t).map((t) => t && t.id) as number[];
        const latestId = Math.max(...todoIds);
        const newTodo = {
          id: latestId + 1,
          category: props.categoryObject.category,
          title: inputRef.current.value,
          done: false,
          priority: 1,
        };
        const newTodoList = todoList.map((t) => {
          if (t && t.category === props.categoryObject.category) {
            return { ...t, priority: t.priority + 1 };
          }
          return t;
        });

        setTodoList([...newTodoList, newTodo]);
      }
    } catch (e) {
      console.error(`${e}: Todoの作成に失敗しました`);
    }
  };

  const handleClickAddTodoButton = async () => {
    await setInputDisplayState(true);
    inputRef.current && inputRef.current.focus();
  };

  const handleInputValueChange = () => {
    if (!inputRef.current) return;
    setInputValueState(inputRef.current.value);
  };

  const handleInputBlur = async () => {
    await createTodoAndSetTodoList();
    setInputDisplayState(false);
    setInputValueState("");
  };

  const handleInputEnterKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    await createTodoAndSetTodoList();
    setInputValueState("");
  };

  return (
    <div className="py-6 md:flex-1 md:px-2">
      <div className={clsx(["mb-6 w-full text-xl font-bold", checkedTextTheme(props.categoryObject.color)])}>
        {props.categoryObject.label}
      </div>

      <div className="flex flex-col space-y-4">
        {props.todoList.map((todo) => {
          return (
            todo && (
              <TodoListItem
                key={todo.id}
                todo={todo}
                categoryColor={props.categoryObject.color}
                onDoneChange={props.onDoneChange}
              />
            )
          );
        })}
        <AddTodoButton onClick={handleClickAddTodoButton} className={inputDisplayState ? "hidden" : ""} />
        <TodoInput
          ref={inputRef}
          value={inputValueState}
          onBlur={handleInputBlur}
          onChange={handleInputValueChange}
          onEnterKeyPress={handleInputEnterKeyPress}
          categoryColor={props.categoryObject.color}
          className={inputDisplayState ? "" : "hidden"}
        />
      </div>
    </div>
  );
};
