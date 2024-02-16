import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

const AuthContext = createContext<any>(null);

const performTokenRefresh = async () => {
  const request = await fetch(
    import.meta.env["VITE_SERVER_URL"] + "/auth/refresh",
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("refresh_token"),
      },
      method: "post",
    }
  );
  if (!request.ok) {
    throw new Error("Error");
  }
  const data = await request.json();
  sessionStorage.setItem("token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
};

const isAuthenticated = () => {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refresh_token");
  return accessToken !== null && refreshToken !== null;
};

const AuthProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      performTokenRefresh();
    }, 30 * 60 * 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, [location]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ element: Element, ...rest }: any) => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

const NotRequireAuth = ({ element: Element, ...rest }: any) => {
  const { authenticated } = useContext(AuthContext);

  return !authenticated ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export { AuthProvider, PrivateRoute, NotRequireAuth };
