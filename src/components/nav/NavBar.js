import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/online-store/">My Web Shop</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                {/* <Link to="/saveproduct/">Add Product</Link> */}
              </NavLink>
            </NavItem>

            <CartSummary></CartSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
