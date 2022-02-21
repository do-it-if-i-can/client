import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { TaskList } from "~/components/model/TaskList";
import { Layout } from "~/components/ui/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="px-6 md:px-20">
          <div className="mx-auto max-w-screen-xl md:flex">
            <TaskList category={"today"} />
            <TaskList category={"tomorrow"} />
            <TaskList category={"ever"} />
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
