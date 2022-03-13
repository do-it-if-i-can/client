import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect } from "react";

type AppPage = (props: AppProps) => JSX.Element;

export const WithTheme = (Component: AppPage) => {
  const withTheme = (props: AppProps) => {
    return (
      <ThemeProvider attribute="class">
        <InitTheme>
          <Component {...props} />
        </InitTheme>
      </ThemeProvider>
    );
  };

  return withTheme;
};

const InitTheme: VFC<{ children: JSX.Element }> = (props) => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) setTheme("light");
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-theme", resolvedTheme ?? "");
  }, [resolvedTheme]);

  return props.children;
};
