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
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token") || "",
      },
      fetchOptions: {
        mode: "cors",
      },
    })
  ),

  cache: new InMemoryCache(),
});
