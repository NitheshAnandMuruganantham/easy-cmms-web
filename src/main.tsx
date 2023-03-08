import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./index.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import Passwordless, { signOut } from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, HttpLink } from "@apollo/client";

import { ToastContainer } from "react-toastify";
import { client } from "./utils/apollo";
import axios from "./utils/axios";

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
      override:{
        functions: (originalImplementation) => {
          return {
            ...originalImplementation,
            consumeCode: async (input) => {
              const response = await originalImplementation.consumeCode(input);
              const {data:Profile} = await axios.get('/me/profile/status');
            if(Profile.role == "MANAGER" || Profile.role == "ADMIN") {
              return response;
            } else {
              await signOut();
              throw new Error("You are not authorized to access this page");
            }
          }
        }
        }
      },
      signInUpFeature:{
        emailOrPhoneFormStyle: `
        [data-supertokens~="superTokensBranding"] {
          display: none;
        }
        `,
        userInputCodeFormStyle:`
        [data-supertokens~="superTokensBranding"] {
          display: none;
        }
        `,
        defaultCountry:"IN",
        termsOfServiceLink:"https://infraweigh.co/terms.html",
        privacyPolicyLink:"https://infraweigh.co/privacy.html"
      }
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
