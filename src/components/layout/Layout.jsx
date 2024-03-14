import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import BreadcrumbComponent from "../breadcrumbComponent/BreadcrumbComponent";

const Layout = () => {
  return (
    <>
      <Navbar />
      <BreadcrumbComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
