import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AboutBanner from "../Components/AboutBanner";
import CounterList from "../Components/CounterList";
import CountUpAnimation from "../Components/CountUpAnimation";
import Teams from "../Components/Teams";
import Footer from "../Components/Footer";
import ContactBar from "../Components/ContactBar";

export default function About() {
  return (
    <>
      <div className=" fadeIn animated ">
        <AboutBanner heading="About Us" />
        <Row className="no-gutters mt-4">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <blockquote className="mt-4 font-italic">
                  <sup>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </sup>{" "}
                  Focus on engaging, reusable content that decrease the cost per
                  leads while helps you to increase profits margin. Margin
                  strives to deliver the tools and support that helps companies
                  grow with unparalleled success.{" "}
                  <sup>
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                  </sup>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  Meet Our <span className="textColor">Experts</span>
                </h1>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </Col>
              <Col sm="12" className="mt-4 mb-5">
                <Row>
                  <Teams
                    img={require("../Images/1.jpg")}
                    name="Philip Green"
                    title="CEO"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                  <Teams
                    img={require("../Images/2.jpg")}
                    name="Melissa Shredinger"
                    title="Email Marketing"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                  <Teams
                    img={require("../Images/3.jpg")}
                    name="Alexander Samokhin"
                    title="Developer"
                    txt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters couterSection py-4 text-white mt-5">
          <div class="overlay2"></div>
          <Container>
            <Row className="my-4">
              <CounterList
                icon="fa fa-smile-o"
                number={<CountUpAnimation endAnimation={654} />}
                info="Achieved ROI"
              />
              <CounterList
                icon="fa fa-clock-o"
                number={<CountUpAnimation endAnimation={450} />}
                info="Hours"
              />
              <CounterList
                icon="fa fa-coffee"
                number={<CountUpAnimation endAnimation={325} />}
                info="Coffee"
              />
              <CounterList
                icon="fa fa-user"
                number={<CountUpAnimation endAnimation={757} />}
                info="Happy CLients"
              />
            </Row>
          </Container>
        </Row>
        <ContactBar />
        <Footer />
      </div>
    </>
  );
}
