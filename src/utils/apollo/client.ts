import { ApolloClient, InMemoryCache } from "@apollo/client";

import { APOLLO_CLIENT_URI } from "~/constants/app";

export const client = new ApolloClient({
  uri: APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});
