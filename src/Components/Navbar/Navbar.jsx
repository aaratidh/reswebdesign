import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-iocn" />
            Wonder
          </Link>
          <div className="menu-icon">{}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
