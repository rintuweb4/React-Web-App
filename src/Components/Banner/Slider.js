import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "../Banner/Banner";
function Slider() {
  return (
    <>
      <Carousel
        className="py-5"
        interval={3000}
        controls={false}
        fade={true}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <Banner
            heading={[
              "Simple App that",
              <br key="break" />,
              "we",
              <span key="span"> CREATE</span>
            ]}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              perspiciatis libero cum omnis, corrupti neque sapiente
              voluptatem nulla quam provident magni temporibus, praesentium."
          >
            <a
              href=".#"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Know Us better
            </a>
          </Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner
            heading="Our App Features"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              perspiciatis libero cum omnis, corrupti neque sapiente
              voluptatem nulla quam provident magni temporibus, praesentium."
          >
            <a
              href=".#"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Know Us better
            </a>
          </Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner
            heading="Want Demo Contact Us"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              perspiciatis libero cum omnis, corrupti neque sapiente
              voluptatem nulla quam provident magni temporibus, praesentium."
          >
            <a
              href=".#"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Know Us better
            </a>
          </Banner>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default React.memo(Slider);
