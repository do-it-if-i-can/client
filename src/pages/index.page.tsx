import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { TaskList } from "~/components/model/task/TaskList";
import { Layout } from "~/components/ui/Layout";

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

const tasksData = [
  {
    id: 1,
    category: "TODAY",
    title: "Next.jsのセットアップ",
    done: true,
    priority: 2,
  },
  {
    id: 2,
    category: "TODAY",
    title: "ESLintのインストール",
    done: false,
    priority: 1,
  },
  {
    id: 3,
    category: "TOMORROW",
    title: "松本さんにメールを送る",
    done: true,
    priority: 2,
  },
  {
    id: 4,
    category: "TOMORROW",
    title: "来週の飲み会の場所を決める",
    done: false,
    priority: 1,
  },
  {
    id: 5,
    category: "SOMEDAY",
    title: "Prettierのインストール",
    done: false,
    priority: 1,
  },
];

const categorizedTasks = (category: string) => {
  return tasksData.filter((task) => task.category === category).sort((a, b) => b.priority - a.priority);
};

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="px-6 md:px-20">
          <div className="mx-auto max-w-screen-xl md:flex md:justify-between">
            <TaskList category={categories.today} tasks={categorizedTasks("TODAY")} />
            <TaskList category={categories.tomorrow} tasks={categorizedTasks("TOMORROW")} />
            <TaskList category={categories.someday} tasks={categorizedTasks("SOMEDAY")} />
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
