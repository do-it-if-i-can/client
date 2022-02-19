import type { NextPage } from "next";

import { Layout } from "~/components/ui/Layout";
import { categories, TaskList } from "~/components/ui/TaskList";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex px-6 mx-auto sm:py-6 sm:px-48">
        {categories.map((c) => {
          return <TaskList key={c} category={c} />;
        })}
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
