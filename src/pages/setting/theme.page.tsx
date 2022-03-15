import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { CheckIcon } from "~/components/ui/Assets/HeroIcon";
import { Layout } from "~/components/ui/Layout/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList";

type Theme = "os" | "light" | "dark";

const IsCheckedIcon = (label: Theme, resolvedTheme: Theme) => {
  if (resolvedTheme === label) {
    return <CheckIcon className="text-info" />;
  }
};

const ThemePage: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const SECTION_LIST_DATA: SectionListDataType = [
    {
      id: "theme",
      list: [
        {
          id: "os",
          type: "button",
          onClick: useCallback(() => setTheme("os"), []),
          leftLabel: "OSの設定に合わせる",
          rightComponent: IsCheckedIcon("os", resolvedTheme),
        },
        {
          id: "light",
          type: "button",
          onClick: useCallback(() => setTheme("light"), []),
          leftLabel: "ライト",
          rightComponent: IsCheckedIcon("light", resolvedTheme),
        },
        {
          id: "dark",
          type: "button",
          onClick: useCallback(() => setTheme("dark"), []),
          leftLabel: "ダーク",
          rightComponent: IsCheckedIcon("dark", resolvedTheme),
        },
      ],
    },
  ];

  return (
    <Layout centerTitle="テーマ" layout="setting">
      <LayoutErrorBoundary>
        <SectionList resolvedTheme={resolvedTheme} data={SECTION_LIST_DATA} />
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(ThemePage);
