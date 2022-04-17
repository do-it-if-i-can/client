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
import { Modal } from "~/components/ui/Modal/Modal";
import { useAccountDeleteModal, useLogoutModal } from "~/hooks";

const ThemingAppleIcon: VFC = () => {
  const { resolvedTheme } = useTheme();
  const color = ["os", "light"].includes(resolvedTheme) ? "#fff" : "#000";
  return <AppleIcon fill={color} />;
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

const AccountPage: NextPage = () => {
  const { isLogoutModalOpen, handleLogoutModalOpen, handleLogoutModalClose, handleLogout } = useLogoutModal();
  const { isAccountDeleteModalOpen, handleAccountDeleteModalOpen, handleAccountDeleteModalClose, handleAccountDelete } =
    useAccountDeleteModal();

  const LogoutButton: VFC = () => {
    return (
      <button className="font-bold text-error" onClick={handleLogoutModalOpen}>
        ログアウト
      </button>
    );
  };

  const AccountDeleteButton: VFC = () => {
    return (
      <button className="font-bold text-error" onClick={handleAccountDeleteModalOpen}>
        アカウント削除
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

  return (
    <Layout centerTitle="アカウント" layout="setting">
      <LayoutErrorBoundary>
        <SectionList data={SECTION_LIST_DATA} />
        <Modal
          isOpen={isLogoutModalOpen}
          onClose={handleLogoutModalClose}
          title={"ログアウト"}
          description={"ログアウトしてよろしいですか？"}
          actionButtonLabel={"ログアウト"}
          onActionButtonClick={handleLogout}
        />
        <Modal
          isOpen={isAccountDeleteModalOpen}
          onClose={handleAccountDeleteModalClose}
          title={"アカウントの削除"}
          description={"アカウントを完全に削除してよろしいですか？"}
          actionButtonLabel={"削除する"}
          onActionButtonClick={handleAccountDelete}
        />
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(AccountPage);
