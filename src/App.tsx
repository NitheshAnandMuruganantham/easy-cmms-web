import React from "react";
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
import RoutineMaintenance from "./pages/routineMaintanance";
import Machine_category from "./pages/meachine_catagory";
import Section from "./pages/section";
import Block from "./pages/block";
import Production from "./pages/production";
import { PlantSettingsContext } from "./context/PlantSettings";
import axios from "./utils/axios";
import ItemCategory from "./pages/Iitem-catagory";
import Spares from "./pages/spares";
import Replacements from "./pages/replacements";
function App() {
  const [plantSettings, setPlantSettings] = React.useState<any>(null);
  React.useEffect(() => {
    axios.get("getBlockSettings").then((res) => {
      setPlantSettings(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <PlantSettingsContext.Provider value={[plantSettings, setPlantSettings]}>
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
            path="/machineCategory"
            element={
              <SessionAuth>
                <Machine_category />
              </SessionAuth>
            }
          />
          <reactRouterDom.Route
            path="/sections"
            element={
              <SessionAuth>
                <Section />
              </SessionAuth>
            }
          />
          <reactRouterDom.Route
            path="/units"
            element={
              <SessionAuth>
                <Block />
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
          <reactRouterDom.Route
            path="/production"
            element={
              <SessionAuth>
                <Production />
              </SessionAuth>
            }
          />
          <reactRouterDom.Route
            path="/item-category"
            element={
              <SessionAuth>
                <ItemCategory />
              </SessionAuth>
            }
          />
          <reactRouterDom.Route
            path="/spares"
            element={
              <SessionAuth>
                <Spares />
              </SessionAuth>
            }
          />
          <reactRouterDom.Route
            path="/replacements"
            element={
              <SessionAuth>
                <Replacements />
              </SessionAuth>
            }
          />
        </reactRouterDom.Route>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        <reactRouterDom.Route
          path="*"
          element={<reactRouterDom.Navigate to="/" />}
        />
      </Routes>
    </PlantSettingsContext.Provider>
  );
}

export default App;
