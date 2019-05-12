import React from "react";
import "./../App.css";
const Header = props => {
  return (
    <div className={props.display}>
      <h1 className="header-text">Welcome to Weather Application</h1>
    </div>
  );
};

export default Header;
