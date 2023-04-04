import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/users" activeStyle>
            Users
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/test" activeStyle>
            Test
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
