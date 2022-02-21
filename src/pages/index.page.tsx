import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { categories, TaskList } from "~/components/model/TaskList";
import { Layout } from "~/components/ui/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="px-6 md:px-20">
          <div className="mx-auto max-w-screen-xl md:flex">
            {categories.map((c) => {
              return <TaskList key={c} category={c} />;
            })}
          </div>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
