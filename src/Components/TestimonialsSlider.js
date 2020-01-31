import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Testimonials from "../Components/Testimonials";
export default function TestimonialsSlider() {
  return (
    <>
      <Carousel
        interval={3000}
        pauseOnHover={false}
        nextIcon={<i className="fa fa-angle-right" />}
        prevIcon={<i className="fa fa-angle-left" />}
        className="testimonialCarousel"
      >
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT1.png")}
                Name="John Dsoza"
                title="Manager"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT2.png")}
                Name="Daniel Dsoza"
                title="CEO"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT3.png")}
                Name="Kelly"
                title="Designer"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT1.png")}
                Name="Andy"
                title="Developer"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT1.png")}
                Name="John Dsoza"
                title="Manager"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/picT2.png")}
                Name="Daniel Dsoza"
                title="CEO"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit repudiandae numquam suscipit exercitationem illo vero non dolores sunt neque."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
