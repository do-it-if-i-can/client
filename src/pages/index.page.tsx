import { DndContext } from "@dnd-kit/core";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { TodoList } from "~/components/model/todo";
import type { Todo } from "~/components/model/todo/TodoListItem";
import { Layout } from "~/components/ui/Layout/Layout";
import type { TodoListState } from "~/globalStates/atoms/todoListState";
import { todoListState } from "~/globalStates/atoms/todoListState";
import { categorizedTodoListState } from "~/globalStates/selectors/categorizedTodoListState";
import { Category, useGetTodosByUserQuery, useUpdateTodoDoneMutation } from "$/gql";

const categoryObjects: {
  [category: string]: {
    category: Category;
    label: string;
    color: string;
  };
} = {
  today: {
    category: Category.TODAY,
    label: "今日する",
    color: "primary",
  },
  tomorrow: {
    category: Category.TOMORROW,
    label: "明日する",
    color: "secondary",
  },
  someday: {
    category: Category.SOMEDAY,
    label: "今度する",
    color: "accent",
  },
};

const Home: NextPage = () => {
  // FIXME: userIdをログイン中のユーザーのIDにする
  const { data: todoListData } = useGetTodosByUserQuery({
    variables: {
      input: {
        userId: "1",
      },
    },
  });

  const [todoList, setTodoList] = useRecoilState<TodoListState>(todoListState);

  useEffect(() => {
    todoListData && setTodoList(todoListData.getTodosByUser);
  }, [todoListData, setTodoList]);

  const [updateTodoDone] = useUpdateTodoDoneMutation();

  const handleDoneChange = async (todo: Todo) => {
    try {
      const { data: updateTodoDoneData } = await updateTodoDone({
        variables: {
          input: {
            done: !todo.done,
            todoId: todo.id,
          },
        },
      });

      if (updateTodoDoneData && updateTodoDoneData.updateTodoDone) {
        // FIXME: refetch()に置き換える
        const newTodo = {
          ...todo,
          done: !todo.done,
        };
        const newTodoList = todoList.map((t) => (t && t.id === todo.id ? newTodo : t));

        setTodoList(newTodoList);
      }
    } catch (e) {
      console.error(`${e}: Todoの更新に失敗しました`);
    }
  };

  const useCategorizedTodoList = (category: Category) => useRecoilValue(categorizedTodoListState(category));

  return (
    <Layout layout="main">
      <LayoutErrorBoundary>
        <DndContext>
          <div className="justify-between mx-auto w-full md:flex md:max-w-screen-xl">
            <TodoList
              categoryObject={categoryObjects.today}
              todoList={useCategorizedTodoList(Category.TODAY)}
              onDoneChange={handleDoneChange}
            />
            <TodoList
              categoryObject={categoryObjects.tomorrow}
              todoList={useCategorizedTodoList(Category.TOMORROW)}
              onDoneChange={handleDoneChange}
            />
            <TodoList
              categoryObject={categoryObjects.someday}
              todoList={useCategorizedTodoList(Category.SOMEDAY)}
              onDoneChange={handleDoneChange}
            />
          </div>
        </DndContext>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(Home);
