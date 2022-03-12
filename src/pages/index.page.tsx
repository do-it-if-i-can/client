import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
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
    color: "text-rose-500",
  },
  tomorrow: {
    label: "明日する",
    color: "text-orange-400",
  },
  someday: {
    label: "今度する",
    color: "text-amber-400",
  },
};

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="px-6 md:px-20">
          <div className="mx-auto max-w-screen-xl md:flex">
            <TaskList category={categories.today} />
            <TaskList category={categories.tomorrow} />
            <TaskList category={categories.someday} />
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(Home);
