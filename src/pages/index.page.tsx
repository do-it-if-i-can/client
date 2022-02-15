import type { NextPage } from "next";

import { Layout } from "~/components/ui/Layout";
import { TaskList } from "~/components/ui/TaskList";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex px-6 mx-auto sm:py-6 sm:px-48">
        <TaskList sectionTitle={"今日する"} />
        <TaskList sectionTitle={"明日する"} />
        <TaskList sectionTitle={"今度する"} />
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
