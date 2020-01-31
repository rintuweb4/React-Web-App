import React, { useEffect, useRef, useState } from "react";
import { Row, Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

export default function Menubar() {
  const navbarScroll = useRef(null);
  const [menucolor, setMenuColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hamBurgerAnimation, sethamBurgerAnimation] = useState(false);

  const hamBurgerAnimationHandler = () => {
    sethamBurgerAnimation(!hamBurgerAnimation);
    setExpanded(expanded ? false : "expanded");
  };
  const expandDefaultHandler = () => {
    setExpanded(false);
    sethamBurgerAnimation(false);
  };

  const myfucn = () => {
    let windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 50) {
      navbarScroll.current.classList.add("navbarBg");
      setMenuColor(true);
    } else {
      navbarScroll.current.classList.remove("navbarBg");
      setMenuColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", myfucn);
  }, []);

  return (
    <>
      <Router>
        <Row className="no-gutters fixed-top" ref={navbarScroll}>
          <Container>
            <Row>
              <div className="w-100">
                <Navbar
                  expand="sm"
                  expanded={expanded}
                  className={menucolor ? "scrollLink" : ""}
                >
                  <Navbar.Brand>
                    <NavLink
                      to="/"
                      exact={true}
                      className="blackColor text-decoration-none"
                    >
                      React App
                    </NavLink>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={hamBurgerAnimationHandler}
                    className={hamBurgerAnimation ? "active" : null}
                    children={
                      <>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </>
                    }
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <NavLink
                        to="/"
                        exact={true}
                        className="nav-link"
                        onClick={expandDefaultHandler}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/About"
                        className="nav-link"
                        onClick={expandDefaultHandler}
                      >
                        About
                      </NavLink>
                      <NavLink
                        to="/Services"
                        className="nav-link"
                        onClick={expandDefaultHandler}
                      >
                        Services
                      </NavLink>
                      <NavLink
                        to="/Contact"
                        className="nav-link"
                        onClick={expandDefaultHandler}
                      >
                        Contact
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Row>
          </Container>
        </Row>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </ScrollToTop>
      </Router>
    </>
  );
}
