import React from "react";
import { Row, Container, Col } from "react-bootstrap";
export default function AboutBanner(props) {
  return (
    <>
      <Row className="no-gutters aboutBg pt-5">
        <div className="overlay"></div>
        <Container className="my-5">
          <Row>
            <Col sm="12" className="text-center mb-4">
              <h1 className="yellowColor">{props.heading}</h1>
              <hr className="lineStyle" />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
