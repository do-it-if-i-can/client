import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { TodoList } from "~/components/model/todo";
import { Layout } from "~/components/ui/Layout";
import { Category, useGetTodosByUserQuery } from "$/gql";

const categories: {
  [category: string]: {
    label: string;
    color: string;
  };
} = {
  today: {
    label: "今日する",
    color: "primary",
  },
  tomorrow: {
    label: "明日する",
    color: "secondary",
  },
  someday: {
    label: "今度する",
    color: "accent",
  },
};

const Home: NextPage = () => {
  // FIXME: userIdをログイン中のユーザーのIDにする
  const { data } = useGetTodosByUserQuery({
    variables: {
      input: {
        userId: "1",
      },
    },
  });

  const categorizedTodos = (category: string) => {
    if (!data) return [];

    return data.getTodosByUser
      .filter((todo) => todo?.category === category)
      .sort((a, b) => (a && b ? b.priority - a.priority : 0));
  };

  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="px-6 md:px-10 xl:px-24">
          <div className="justify-between mx-auto w-full md:flex md:max-w-screen-xl">
            <TodoList category={categories.today} todos={categorizedTodos(Category.TODAY)} />
            <TodoList category={categories.tomorrow} todos={categorizedTodos(Category.TOMORROW)} />
            <TodoList category={categories.someday} todos={categorizedTodos(Category.SOMEDAY)} />
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(Home);
