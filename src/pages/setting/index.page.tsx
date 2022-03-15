import type { NextPage } from "next";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { Layout } from "~/components/ui/Layout";

const SettingPage: NextPage = () => {
  return (
    <Layout centerTitle="設定">
      <LayoutErrorBoundary>
        <div>
          <h1>設定画面</h1>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(SettingPage);
