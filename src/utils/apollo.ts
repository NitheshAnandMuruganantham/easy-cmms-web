import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// @ts-ignore
import apolloLogger from "apollo-link-logger";
export const client = new ApolloClient({
  link: apolloLogger.concat(
    new HttpLink({
      uri: `${import.meta.env["VITE_ENDPOINT"]}/graphql`,
      fetchOptions: {
        mode: "cors",
        credentials: "include",
      },
    })
  ),

  cache: new InMemoryCache(),
});
