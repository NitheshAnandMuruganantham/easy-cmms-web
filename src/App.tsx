import { Routes } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/lib/build";
import Home from "./pages/home";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import NavSidebar from "./components/navSidebar";
import Settings from "./pages/settings";
import Users from "./pages/users";
import Maintanances from "./pages/maintanance";
import Ticket from "./pages/tickets";
import Machines from "./pages/machines";
import { useUserContext } from "supertokens-auth-react";

import { useEffect } from "react";
import axios from "./utils/axios";
import RoutineMaintenance from "./pages/routineMaintanance";
function App() {
  const data = useUserContext();
  useEffect(() => {
    axios.get("/token").then((res) => {
      localStorage.setItem("token", res.data.token);
    });
  }, [data]);
  return (
    <Routes>
      <reactRouterDom.Route element={<NavSidebar />}>
        <reactRouterDom.Route
          path="/"
          element={
            <SessionAuth>
              <Home />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/tickets"
          element={
            <SessionAuth>
              <Ticket />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/maintanance"
          element={
            <SessionAuth>
              <Maintanances />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/users"
          element={
            <SessionAuth>
              <Users />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/settings"
          element={
            <SessionAuth>
              <Settings />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/machines"
          element={
            <SessionAuth>
              <Machines />
            </SessionAuth>
          }
        />
        <reactRouterDom.Route
          path="/routine-maintenance"
          element={
            <SessionAuth>
              <RoutineMaintenance />
            </SessionAuth>
          }
        />
      </reactRouterDom.Route>
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
    </Routes>
  );
}

export default App;
