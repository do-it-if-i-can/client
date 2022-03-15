import type { NextPage } from "next";
import { useTheme } from "next-themes";
import type { FC, ReactNode } from "react";
import { useCallback } from "react";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { Layout } from "~/components/ui/Layout/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList/SectionList";

const SettingPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm">{children}</div>;
};

const ThemePage: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const SETTING_NAVIGATION_DATA: SectionListDataType = [
    {
      id: "theme",
      list: [
        {
          id: "os",
          type: "button",
          onClick: useCallback(() => setTheme("light"), []),
          leftLabel: "OSの設定に合わせる",
        },
        {
          id: "light",
          type: "button",
          onClick: useCallback(() => setTheme("light"), []),
          leftLabel: "ライト",
        },
        {
          id: "dark",
          type: "button",
          onClick: useCallback(() => setTheme("dark"), []),
          leftLabel: "ダーク",
        },
      ],
    },
  ];

  return (
    <Layout>
      <LayoutErrorBoundary>
        <SettingPageLayout>
          <SectionList resolvedTheme={resolvedTheme} data={SETTING_NAVIGATION_DATA} />
        </SettingPageLayout>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(ThemePage);
