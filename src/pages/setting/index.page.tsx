import type { NextPage } from "next";
import { useTheme } from "next-themes";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { ChevronRightIcon, ExternalLinkIcon } from "~/components/ui/Assets/HeroIcon";
import { Layout } from "~/components/ui/Layout/Layout";
import type { SectionListDataType } from "~/components/ui/Layout/SectionList";
import { SectionList } from "~/components/ui/Layout/SectionList";

const SECTION_LIST_DATA: SectionListDataType = [
  {
    id: "profile",
    sectionLabel: "プロフィール",
    list: [
      {
        id: "profile",
        type: "link",
        href: "/setting/profile",
        leftLabel: "プロフィール",
        rightComponent: <ChevronRightIcon className="text-base-300" />,
      },
      {
        id: "account",
        type: "link",
        href: "/setting/account",
        leftLabel: "アカウント",
        rightComponent: <ChevronRightIcon className="text-base-300" />,
      },
      {
        id: "theme",
        type: "link",
        href: "/setting/theme",
        leftLabel: "テーマ",
        rightComponent: <ChevronRightIcon className="text-base-300" />,
      },
    ],
  },
  {
    id: "support",
    sectionLabel: "サポート",
    list: [
      {
        id: "privacy",
        type: "link",
        href: "/setting/privacy",
        leftLabel: "プライバシーポリシー",
        rightComponent: <ChevronRightIcon className="text-base-300" />,
      },
      {
        id: "terms",
        type: "link",
        href: "/setting/terms",
        leftLabel: "利用規約",
        rightComponent: <ChevronRightIcon className="text-base-300" />,
      },
      {
        id: "contact",
        type: "link",
        href: "/setting/contact",
        leftLabel: "お問い合わせ",
        rightComponent: <ExternalLinkIcon className="text-base-300" />,
      },
    ],
  },
];

const SettingPage: NextPage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Layout centerTitle="設定" layout="setting">
      <LayoutErrorBoundary>
        <SectionList resolvedTheme={resolvedTheme} data={SECTION_LIST_DATA} />
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(SettingPage);
