import type { NextPage } from "next";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { Layout } from "~/components/ui/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <div></div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
