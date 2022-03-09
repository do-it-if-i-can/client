import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { TaskList } from "~/components/model/task/TaskList";
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
    color: "rose-500",
  },
  tomorrow: {
    label: "明日する",
    color: "orange-400",
  },
  someday: {
    label: "今度する",
    color: "amber-400",
  },
};

const Home: NextPage = () => {
  // FIXME: userIdをログイン中のユーザーのIDにする
  const { data: data } = useGetTodosByUserQuery({
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
        <div className="px-6 md:px-20">
          <div className="mx-auto max-w-screen-xl md:flex md:justify-between">
            <TaskList category={categories.today} tasks={categorizedTodos(Category.TODAY)} />
            <TaskList category={categories.tomorrow} tasks={categorizedTodos(Category.TOMORROW)} />
            <TaskList category={categories.someday} tasks={categorizedTodos(Category.SOMEDAY)} />
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
