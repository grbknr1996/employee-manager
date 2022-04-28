import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to={"/"}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link to={"add/employee"}>Add Employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
