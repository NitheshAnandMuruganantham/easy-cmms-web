import React from "react";
import { Routes } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import Home from "./pages/home";
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
import { PlantSettingsContext } from "./context/PlantSettings";
import axios from "./utils/axios";
import ItemCategory from "./pages/Iitem-catagory";
import Spares from "./pages/spares";
import Replacements from "./pages/replacements";
import Invoices from "./pages/invoices";
import { AuthProvider, NotRequireAuth, PrivateRoute } from "./provider/auth";
import AcceptInvite from "./pages/auth/acceptInvite";
import SignInSide from "./pages/auth/logIn";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [plantSettings, setPlantSettings] = React.useState<any>(null);
  React.useEffect(() => {
    axios.get("getBlockSettings").then((res) => {
      setPlantSettings(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PlantSettingsContext.Provider
          value={[plantSettings, setPlantSettings]}
        >
          <Routes>
            <reactRouterDom.Route element={<PrivateRoute />}>
              <reactRouterDom.Route element={<NavSidebar />}>
                <reactRouterDom.Route path="/" element={<Home />} />
                <reactRouterDom.Route path="/tickets" element={<Ticket />} />
                <reactRouterDom.Route
                  path="/maintanance"
                  element={<Maintanances />}
                />
                <reactRouterDom.Route path="/users" element={<Users />} />
                <reactRouterDom.Route path="/settings" element={<Settings />} />
                <reactRouterDom.Route path="/machines" element={<Machines />} />
                <reactRouterDom.Route
                  path="/machineCategory"
                  element={<Machine_category />}
                />
                <reactRouterDom.Route path="/sections" element={<Section />} />
                <reactRouterDom.Route path="/units" element={<Block />} />
                <reactRouterDom.Route
                  path="/routine-maintenance"
                  element={<RoutineMaintenance />}
                />
                <reactRouterDom.Route path="/invoices" element={<Invoices />} />
                <reactRouterDom.Route
                  path="/item-category"
                  element={<ItemCategory />}
                />
                <reactRouterDom.Route path="/spares" element={<Spares />} />
                <reactRouterDom.Route
                  path="/replacements"
                  element={<Replacements />}
                />
              </reactRouterDom.Route>
            </reactRouterDom.Route>
            <reactRouterDom.Route element={<NotRequireAuth />}>
              <reactRouterDom.Route path="/login" element={<SignInSide />} />
            </reactRouterDom.Route>
            <reactRouterDom.Route
              path="*"
              element={<reactRouterDom.Navigate to="/" />}
            />
          </Routes>
        </PlantSettingsContext.Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
