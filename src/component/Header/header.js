import React from "react";
import logo from "../../images/logo.png";
import "./header.css";
const Header = () => {
  return (
    <div className="headers">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/shop">Manage Inventory</a>
        <a href="/ektiar">Ektiar</a>
      </nav>
    </div>
  );
};

export default Header;
