import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

import { typeDefs, defaults, resolvers } from "./clientState";

const cache = new InMemoryCache();
//상태
const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers
});
//http 링크
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;