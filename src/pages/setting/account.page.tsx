import type { NextPage } from "next";
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

const LogoutButton = () => {
  const handleLogout = () => alert("ログアウトしました");
  return (
    <button className="font-bold text-error" onClick={handleLogout}>
      ログアウト
    </button>
  );
};
const AccountDeleteButton = () => {
  const handleAccountDelete = () => alert("アカウントを削除しました");
  return (
    <button className="font-bold text-error" onClick={handleAccountDelete}>
      アカウント削除
    </button>
  );
};
const GoogleLinkButton = () => {
  const handleGoogleConnect = () => alert("Google連携しました");
  return (
    <button className="w-24 btn btn-sm" onClick={handleGoogleConnect}>
      連携する
    </button>
  );
};
const AppleLinkButton = () => {
  const handleAppleConnect = () => alert("Apple連携しました");
  return (
    <button className="w-24 btn btn-info btn-sm" onClick={handleAppleConnect}>
      連携する
    </button>
  );
};

const SETTING_NAVIGATION_DATA: SectionListDataType = [
  {
    id: "account",
    sectionLabel: "アカウントの連携",
    list: [
      {
        id: "google",
        leftLabel: "Google",
        leftComponent: <ChevronLeftIcon />,
        rightComponent: <GoogleLinkButton />,
      },
      {
        id: "apple",
        leftLabel: "apple",
        leftComponent: <ChevronLeftIcon />,
        rightComponent: <AppleLinkButton />,
      },
    ],
  },
  {
    id: "authentication",
    sectionLabel: "アカウントの操作",
    list: [
      {
        id: "logout",
        leftComponent: <LogoutButton />,
      },
      {
        id: "account_delete",
        leftComponent: <AccountDeleteButton />,
      },
    ],
  },
];

const SettingPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm">{children}</div>;
};

const AccountPage: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <SettingPageLayout>
          <SectionList data={SETTING_NAVIGATION_DATA} />
        </SettingPageLayout>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(AccountPage);
