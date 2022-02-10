import "src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { client } from "~/utils/apollo/client";

const MyApp = (props: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <props.Component {...props.pageProps} />
    </ApolloProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
