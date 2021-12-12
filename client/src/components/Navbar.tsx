import React from "react";
import "../css/navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">&lt; /&gt;</div>
      <div className="inner-flex">
        <a href="/sign-up">Sign up</a>
      </div>
    </div>
  );
};
