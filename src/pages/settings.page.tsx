import type { NextPage } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { PlusIcon } from "~/components/ui/Assets/PlusIcon";
import { Layout } from "~/components/ui/Layout";

const SETTING_NAVIGATION = [
  {
    id: "profile",
    sectionLabel: "プロフィール",
    items: [
      {
        id: "profile",
        label: "プロフィール",
        href: "/setting/profile",
        icon: <PlusIcon />,
      },
      {
        id: "account",
        label: "アカウント",
        href: "/setting/account",
        icon: <PlusIcon />,
      },
      {
        id: "theme",
        label: "テーマ",
        href: "/setting/theme",
        icon: <PlusIcon />,
      },
    ],
  },
  {
    id: "support",
    sectionLabel: "サポート",
    items: [
      {
        id: "privacy_policy",
        label: "プライバシーポリシー",
        href: "/setting/privacy_policy",
        icon: <PlusIcon />,
      },
      {
        id: "terms_of_use",
        label: "利用規約",
        href: "/setting/terms_of_use",
        icon: <PlusIcon />,
      },
      {
        id: "contact",
        label: "お問い合わせ",
        href: "/setting/contact",
        icon: <PlusIcon />,
      },
    ],
  },
];

const currentThemeCheck = (resolvedTheme?: "light" | "dark") => {
  switch (resolvedTheme) {
    case "light":
      return "ライト";
    case "dark":
      return "ダーク";
    default:
      return "端末の設定に合わせる";
  }
};

const SettingPage: NextPage = () => {
  const { resolvedTheme } = useTheme();
  const currentTheme = currentThemeCheck(resolvedTheme);

  return (
    <Layout>
      <LayoutErrorBoundary>
        <div className="pt-4 mx-auto max-w-screen-sm h-screen md:max-w-screen-sm">
          {SETTING_NAVIGATION.map((section) => (
            <div key={section.id} className="mb-4">
              <h2 className="py-4 px-6 text-sm font-bold md:py-2 md:px-4 text-base-300">{section.sectionLabel}</h2>

              <ul>
                {section.items.map((item) => (
                  <Link key={item.id} href={item.href}>
                    <a className="block py-4 px-6 text-base font-bold md:p-4 hover:bg-base-200">
                      <li className="flex justify-between items-center">
                        {item.label}
                        <span className="flex gap-4 items-center">
                          {item.id === "theme" && <span>{currentTheme}</span>}
                          {item.icon}
                        </span>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(SettingPage);
