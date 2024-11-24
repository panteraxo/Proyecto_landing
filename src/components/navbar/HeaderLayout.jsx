import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function HeaderLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HeaderLayout;
