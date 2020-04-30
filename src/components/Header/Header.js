import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav style={{ margin: 20, display: "flex", justifyContent: "space-between" }}>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link>
    <Link to="/employees">Employees</Link>
    <Link to="/employees-hook">Employees List Hook</Link>
  </nav>
);

export default Header;
