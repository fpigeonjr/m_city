import React from "react";
import Header from "../Components/header_footer/Header";
import Footer from "../Components/header_footer/Footer";

const Layout = props => {
  return (
    <div>
      <Header />
      <h1>Layout</h1>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
