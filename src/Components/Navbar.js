import React from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          onClick={scroll.scrollToTop}
        />
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-35}
              duration={1200}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-35}
              duration={1200}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-35}
              duration={1200}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;