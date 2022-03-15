import type { VFC } from "react";

import { SectionListItem } from "./SectionListItem";

type ThemeKey = "light" | "dark";

type Common = {
  id: string;
  leftLabel?: string;
  leftComponent?: JSX.Element;
  rightLabel?: string;
  rightComponent?: JSX.Element;
};

type Link = {
  type: "link";
  href: string;
  onClick?: undefined;
};

type Button = {
  type: "button";
  onClick: () => void;
  href?: undefined;
};

type Div = {
  type?: undefined;
  href?: undefined;
  onClick?: undefined;
};

export type SectionListDataType = {
  id: string;
  sectionLabel?: string;
  list: (Common & (Link | Button | Div))[];
}[];

type Props = {
  resolvedTheme?: ThemeKey;
  data: SectionListDataType;
};

const currentThemeCheck = (resolvedTheme?: ThemeKey) => {
  switch (resolvedTheme) {
    case "light":
      return "ライト";
    case "dark":
      return "ダーク";
    default:
      return "端末の設定に合わせる";
  }
};

export const SectionList: VFC<Props> = ({ data, resolvedTheme }) => {
  const currentTheme = currentThemeCheck(resolvedTheme);

  return (
    <>
      {data.map((section) => (
        <div key={section.id} className="mb-4">
          {section.sectionLabel && (
            <h2 className="py-4 px-6 text-sm font-bold md:py-2 md:px-4 text-base-300">{section.sectionLabel}</h2>
          )}

          {section.list.map((list) => (
            <SectionListItem key={list.id} type={list.type} href={list.href} handleClick={list.onClick}>
              <span className="flex gap-2 items-center">
                {list.leftComponent}
                <span>{list.leftLabel}</span>
              </span>
              <span className="flex gap-2 items-center">
                <span>{list.rightLabel}</span>
                {list.id === "theme" && <span>{currentTheme}</span>}
                {list.rightComponent}
              </span>
            </SectionListItem>
          ))}
        </div>
      ))}
    </>
  );
};
