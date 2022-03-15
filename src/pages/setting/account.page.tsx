import type { NextPage } from "next";
import { useTheme } from "next-themes";
import type { VFC } from "react";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { AppleIcon } from "~/components/ui/Assets/AppleIcon";
import { GoogleIcon } from "~/components/ui/Assets/GoogleIcon";
import { Layout } from "~/components/ui/Layout/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList";

const ThemingAppleIcon: VFC = () => {
  const { resolvedTheme } = useTheme();
  const color = ["os", "light"].includes(resolvedTheme) ? "#fff" : "#000";
  return <AppleIcon fill={color} />;
};

const LogoutButton: VFC = () => {
  const handleLogout = () => alert("ログアウトしました");
  return (
    <button className="font-bold text-error" onClick={handleLogout}>
      ログアウト
    </button>
  );
};

const AccountDeleteButton: VFC = () => {
  const handleAccountDelete = () => alert("アカウントを削除しました");
  return (
    <button className="font-bold text-error" onClick={handleAccountDelete}>
      アカウント削除
    </button>
  );
};

const GoogleLinkButton: VFC = () => {
  const handleGoogleConnect = () => alert("Google連携しました");
  return (
    <button className="w-24 btn btn-sm" onClick={handleGoogleConnect}>
      連携する
    </button>
  );
};

const AppleLinkButton: VFC = () => {
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
        leftComponent: <GoogleIcon />,
        rightComponent: <GoogleLinkButton />,
      },
      {
        id: "apple",
        leftLabel: "Apple",
        leftComponent: <ThemingAppleIcon />,
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

const AccountPage: NextPage = () => {
  return (
    <Layout centerTitle="アカウント" layout="setting">
      <LayoutErrorBoundary>
        <SectionList data={SECTION_LIST_DATA} />
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(AccountPage);
