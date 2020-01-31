import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import WOW from "wowjs";
import AboutBanner from "../Components/AboutBanner";
import Footer from "../Components/Footer";
import ServicesList from "../Components/ServicesList";
import ServicesList2 from "../Components/ServiceList2";

export default function Services() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }, []);

  return (
    <>
      <div className=" fadeIn animated ">
        <AboutBanner heading="Services" />
        <Row className="no-gutters mt-4">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <p className=" font-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  dignissimos dolorum suscipit nisi. Dolore, minus. Quis
                  deserunt ipsam error culpa voluptatem aspernatur,
                  reprehenderit eum quos dignissimos? Distinctio ratione
                  reiciendis vel.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-4">
          <Container className="mt-sm-5">
            <Row>
              <Col sm="12" className="mt-4 mb-5">
                <Row>
                  <ServicesList
                    img={require("../Images/services1.jpg")}
                    name="Analytics and Research"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                  <ServicesList
                    img={require("../Images/services2.jpg")}
                    name="Copywriting"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                  <ServicesList
                    img={require("../Images/services3.jpg")}
                    name="Sales growth"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  <span className="textColor">Top 6 Reasons</span> Why We Are
                  the Best
                </h1>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </Col>
              <Col sm="12" className="mt-5 mb-sm-5">
                <Row>
                  <ServicesList2
                    animateDuration="300ms"
                    img={require("../Images/services4.jpg")}
                    name="Fast Result"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                  <ServicesList2
                    animateDuration="600ms"
                    img={require("../Images/services5.jpg")}
                    name="Award Winning Agency"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                  <ServicesList2
                    animateDuration="900ms"
                    img={require("../Images/services6.jpg")}
                    name="Business Consultation"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                </Row>
                <Row className="mt-sm-5">
                  <ServicesList2
                    animateDuration="1200ms"
                    img={require("../Images/services7.jpg")}
                    name="Friendly Customer Support"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                  <ServicesList2
                    animateDuration="1500ms"
                    img={require("../Images/services8.jpg")}
                    name="100% Money Back Guarantee"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                  <ServicesList2
                    animateDuration="1800ms"
                    img={require("../Images/services9.jpg")}
                    name="Customer Loyalty"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>

        <Footer />
      </div>
    </>
  );
}
