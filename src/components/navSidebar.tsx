import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

function NavSidebar() {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
}

export default NavSidebar;
