import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  console.log("footer");
  return (
    <>
      <Row className="no-gutters footerBg text-white">
        <Container>
          <Row>
            <Col sm="12">
              <Row>
                <Col md="6">
                  <h1>React App</h1>
                  <p className="text-white">
                    Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                    leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu,
                    in porta metus. Suspendisse blandit pulvinar ligula ut
                    elementum.
                  </p>
                </Col>
                <Col md="2">
                  <h5>Resources</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/About" className="text-white">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services" className="text-white">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact" className="text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col md="4">
                  <h5>Contact</h5>
                  <ul className="list-unstyled">
                    <li>Bhubaneswar, India</li>
                    <li>
                      Phone :{" "}
                      <a href="tel:+9100000000" className="text-white">
                        +9100000000
                      </a>
                    </li>
                    <li>
                      Email :{" "}
                      <a
                        href="mailto:email@reactapp.com"
                        className="text-white"
                      >
                        email@reactapp.com
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm="12" className="text-center">
                  <hr className="mt-5" />
                  <p className="text-white">
                    Copyright © 2020 React App | Designed by Rintu Gochhayat
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
export default Footer;
