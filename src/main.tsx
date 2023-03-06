import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./index.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, HttpLink } from "@apollo/client";

import { ToastContainer } from "react-toastify";
import { client } from "./utils/apollo";

SuperTokens.init({
  appInfo: {
    appName: import.meta.env["VITE_APP_NAME"],
    apiDomain: import.meta.env["VITE_ENDPOINT"],
    websiteDomain: import.meta.env["VITE_BASE_URL"],
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    Passwordless.init({
      contactMethod: "PHONE",
    }),
    Session.init(),
  ],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuperTokensWrapper>
        <ApolloProvider client={client}>
          <ToastContainer />
          <App />
        </ApolloProvider>
      </SuperTokensWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
