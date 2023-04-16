import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Alert from "./Alert";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="mt-[80px]">
        <Outlet />
      </div>
      <Footer />
      <Alert />
    </main>
  );
};

export default Layout;
