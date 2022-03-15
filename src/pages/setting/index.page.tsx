import type { NextPage } from "next";
import { useTheme } from "next-themes";
import type { FC, ReactNode } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { Layout } from "~/components/ui/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList/SectionList";

export const ChevronLeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-base-300 group-hover:text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};

const SETTING_NAVIGATION_DATA: SectionListDataType = [
  {
    id: "profile",
    sectionLabel: "プロフィール",
    list: [
      {
        id: "profile",
        type: "link",
        href: "/setting/profile",
        leftLabel: "プロフィール",
        rightComponent: <ChevronLeftIcon />,
      },
      {
        id: "account",
        type: "link",
        href: "/setting/account",
        leftLabel: "アカウント",
        rightComponent: <ChevronLeftIcon />,
      },
      {
        id: "theme",
        type: "link",
        href: "/setting/theme",
        leftLabel: "テーマ",
        rightComponent: <ChevronLeftIcon />,
      },
    ],
  },
  {
    id: "support",
    sectionLabel: "サポート",
    list: [
      {
        id: "privacy_policy",
        type: "link",
        href: "/setting/privacy_policy",
        leftLabel: "プライバシーポリシー",
        rightComponent: <ChevronLeftIcon />,
      },
      {
        id: "terms_of_use",
        type: "link",
        href: "/setting/terms_of_use",
        leftLabel: "利用規約",
        rightComponent: <ChevronLeftIcon />,
      },
      {
        id: "contact",
        type: "link",
        href: "/setting/contact",
        leftLabel: "お問い合わせ",
        rightComponent: <ChevronLeftIcon />,
      },
    ],
  },
];

const SettingPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm">{children}</div>;
};

const SettingPage: NextPage = () => {
  const { resolvedTheme } = useTheme();

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
export default WithAuth(SettingPage);
