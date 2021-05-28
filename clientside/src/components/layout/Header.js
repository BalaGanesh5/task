import React from "react";
import { Link } from "react-router-dom";
import Autho from "../auth/Autho";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar className="header" bg="dark">
      <Autho />
    </Navbar>
  );
};

export default Header;
