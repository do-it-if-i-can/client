import type { WithAuthenticationRequiredOptions } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import type { NextPage } from "next";

import { Spinner } from "~/components/ui/Layout/Spinner";

/**
 * 認証済みユーザーのみが見られるページを設定するHOC
 *
 * ex) export default WithAuth(PageComponent)
 */
export const WithAuth = (Component: NextPage<any>, options?: WithAuthenticationRequiredOptions) => {
  return withAuthenticationRequired(
    Component,
    options
      ? options
      : {
          // TODO: `returnTo`の値も検討の余地あり
          returnTo: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
          onRedirecting: () => <Spinner />,
        },
  );
};
