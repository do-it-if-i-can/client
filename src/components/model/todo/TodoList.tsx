import clsx from "clsx";
import type { KeyboardEvent, VFC } from "react";
import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import type { Todo } from "~/components/model/todo/TodoListItem";
import { editTodoState } from "~/globalStates/atoms/editTodoState";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import type { Category, GetTodosByUserQuery } from "$/gql";
import { useCreateTodoMutation, useUpdateTodoMutation } from "$/gql";

import { AddTodoButton, TodoListItem } from ".";
import { TodoInput } from ".";

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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputDisplayState, setInputDisplayState] = useState(false);
  const [inputValueState, setInputValueState] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);
  const setEditTodoStateInfo = useSetRecoilState(editTodoState);

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

  const updateTodoAndSetTodoList = async (todo: Todo) => {
    if (!inputRef.current) return;
    if (!inputRef.current.value) {
      setEditingTodo(null);
      return;
    }

    try {
      const { data } = await updateTodo({
        variables: {
          input: {
            title: inputRef.current.value,
            todoId: todo.id,
          },
        },
      });
      if (data && data.updateTodo) {
        // FIXME: refetch()に置き換える
        const newTodo = {
          ...todo,
          title: inputRef.current.value,
        };
        const newTodoList = todoList.map((t) => (t && t.id === todo.id ? newTodo : t));

        setTodoList(newTodoList);
      }
    } catch (e) {
      console.error(`${e}: Todoの更新に失敗しました`);
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

  const handleInputBlur = async (todo?: Todo) => {
    if (todo) {
      await updateTodoAndSetTodoList(todo);
      setEditingTodo(null);
    } else {
      await createTodoAndSetTodoList();
      setInputDisplayState(false);
    }
    setInputValueState("");
  };

  const handleInputEnterKeyPress = async (e: KeyboardEvent<HTMLTextAreaElement>, todo?: Todo) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;
    e.preventDefault();

    if (todo) {
      await updateTodoAndSetTodoList(todo);
      setEditingTodo(null);
    } else {
      await createTodoAndSetTodoList();
    }
    setInputValueState("");
  };

  const handleLabelClick = async (todo: Todo) => {
    await setEditingTodo(todo);
    inputRef.current && inputRef.current.focus();
    setInputValueState(todo.title);
    setEditTodoStateInfo({
      isFocused: true,
      id: todo.id,
      value: todo.title,
      category: todo.category,
    });
  };

  return (
    <div className="py-6 md:flex-1 md:px-2">
      <div className={clsx(["mb-6 w-full text-xl font-bold", checkedTextTheme(props.categoryObject.color)])}>
        {props.categoryObject.label}
      </div>

      <div className="flex flex-col space-y-4">
        {props.todoList.map((todo) => {
          return (
            todo &&
            (editingTodo && todo === editingTodo ? (
              <TodoInput
                key={todo.id}
                ref={inputRef}
                value={inputValueState}
                todo={todo}
                onChange={handleInputValueChange}
                onBlur={handleInputBlur}
                onEnterKeyPress={handleInputEnterKeyPress}
                categoryColor={props.categoryObject.color}
              />
            ) : (
              <TodoListItem
                key={todo.id}
                todo={todo}
                categoryColor={props.categoryObject.color}
                onDoneChange={props.onDoneChange}
                onLabelClick={handleLabelClick}
              />
            ))
          );
        })}
        {inputDisplayState ? (
          <TodoInput
            ref={inputRef}
            value={inputValueState}
            onChange={handleInputValueChange}
            onBlur={handleInputBlur}
            onEnterKeyPress={handleInputEnterKeyPress}
            categoryColor={props.categoryObject.color}
          />
        ) : (
          <AddTodoButton onClick={handleClickAddTodoButton} />
        )}
      </div>
    </div>
  );
};
