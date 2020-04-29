import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav style={{ margin: 20 }}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/employees">Employees</Link>
  </nav>
);

export default Header;
