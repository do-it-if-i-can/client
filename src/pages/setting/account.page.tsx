import type { NextPage } from "next";
import type { FC, ReactNode } from "react";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { ChevronLeftIcon } from "~/components/ui/Assets/HeroIcon";
import { Layout } from "~/components/ui/Layout/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList/SectionList";

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

const SECTION_LIST_DATA: SectionListDataType = [
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
    <Layout centerTitle="アカウント">
      <LayoutErrorBoundary>
        <SettingPageLayout>
          <SectionList data={SECTION_LIST_DATA} />
        </SettingPageLayout>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(AccountPage);
