import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="main-content flex-1 overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
