import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import classNames from "classnames";

import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const NavbarIE = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  let listener = null;
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (!scrollState) {
          setScrollState(true);
        }
      } else {
        if (scrollState) {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand="md"
        className={classNames({
          [styles.navbar]: true,
          [styles.navScrolled]: scrollState,
        })}
      >
        <Container className={styles.container}>
          <NavbarBrand
            href="/"
            className={styles.navbarBrand}
            style={scrollState ? { height: 10 + "rem" } : null}
          >
            <img src="/appex_logo.png" alt="logo" className={styles.logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className={styles.navLinks} navbar>
              <NavItem>
                <Link href="/summit">
                  <NavLink className={styles.navLink}>Summit </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/hackathon">
                  <NavLink className={styles.navLink}>Hackathon </NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <NavLink className={styles.navLink}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink}>About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink}>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink}>Prizes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink}>Contact</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarIE;
