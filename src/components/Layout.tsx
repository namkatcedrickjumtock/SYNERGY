import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      {/* header section */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
