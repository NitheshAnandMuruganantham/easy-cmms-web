import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./index.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("dddafd69d4dc6248e7116119558ff724", { debug: true });

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, HttpLink } from "@apollo/client";

import { ToastContainer } from "react-toastify";
import { client } from "./utils/apollo";
import axios from "./utils/axios";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <App />
        </QueryClientProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
