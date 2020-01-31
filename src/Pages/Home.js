import React, { useEffect, useMemo } from "react";
import { Row, Container, Col } from "react-bootstrap";
import WOW from "wowjs";
import Slider from "../Components/Banner/Slider";
import Features from "../Components/Features";
import Lists from "../Components/Lists";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import Footer from "../Components/Footer";

export default function Home() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }, []);

  const footer = useMemo(() => {
    return <Footer />;
  }, []);
  return (
    <>
      <div className=" fadeIn animated ">
        <Row className="no-gutters bannerBg">
          <Container>
            <Row>
              <Col sm="12">
                <Slider />
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-md-5">
          <Container className="mt-md-5">
            <Row>
              <Features />
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Container className="mt-md-5 pt-md-5 mt-5">
            <Row>
              <Col md="6">
                <img
                  src={require("../Images/left-image.png")}
                  alt=""
                  className="img-fluid  mt-md-5 mb-4 mb-md-0"
                />
              </Col>
              <Col md="6">
                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Vestibulum pulvinar rhoncus"
                  text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Molestiae corrupti sunt vitae iste quos tenetur porro quo ab repellendus, blanditiis similique distinctio, atque eum officiis!"
                  animateDuration="300ms"
                />
                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Sed blandit quam in velit"
                  text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Molestiae corrupti sunt vitae iste quos tenetur porro quo ab repellendus, blanditiis similique distinctio, atque eum officiis!"
                  animateDuration="600ms"
                />
                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Aenean faucibus venenatis"
                  text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Molestiae corrupti sunt vitae iste quos tenetur porro quo ab repellendus, blanditiis similique distinctio, atque eum officiis!"
                  animateDuration="900ms"
                />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  What They Think <span className="textColor">About Us</span>
                </h1>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </Col>
              <Col sm="12" className="overflow-hidden">
                <TestimonialsSlider />
              </Col>
            </Row>
          </Container>
        </Row>

        {/* <Footer /> */}
        {footer}
      </div>
    </>
  );
}
