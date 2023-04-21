import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="h-screen">
        {/* header section */}
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
