import "src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_REDIRECT_URI } from "~/constants/auth";
import { client } from "~/utils/apollo/client";

if (process.env.NODE_ENV === "development") {
  require("src/mocks/main");
}

const MyApp = (props: AppProps) => {
  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID} redirectUri={AUTH0_REDIRECT_URI}>
      <ApolloProvider client={client}>
        <props.Component {...props.pageProps} />
      </ApolloProvider>
    </Auth0Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
