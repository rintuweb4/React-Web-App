import React from "react";
import { Col } from "react-bootstrap";
function Features() {
  console.log("features");
  const lists = [
    {
      icon: require("../Images/features-icon-1.png"),
      heading: "Trend Analysis",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis libero cum omnis, corrupti neque sapiente voluptatem nulla quam provident magni temporibus, praesentium. ",
      button: "Read More",
      animateDuration: "300ms",
      animateName: "fadeInLeft"
    },
    {
      icon: require("../Images/features-icon-2.png"),
      heading: "Site Optimization",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis libero cum omnis, corrupti neque sapiente voluptatem nulla quam provident magni temporibus, praesentium.",
      button: "Discover More",
      animateDuration: "600ms",
      animateName: "fadeInUp"
    },
    {
      icon: require("../Images/features-icon-3.png"),
      heading: "Email Design",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis libero cum omnis, corrupti neque sapiente voluptatem nulla quam provident magni temporibus, praesentium.",
      button: "More Details",
      animateDuration: "900ms",
      animateName: "fadeInRight"
    }
  ];
  return (
    <>
      {lists.map((list, idx) => (
        <Col
          md="4"
          key={idx}
          className={`text-center ${list.animateName} animated mt-5 wow`}
          data-wow-duration={list.animateDuration}
        >
          <img src={list.icon} alt="" className="mb-3" />
          <h4>{list.heading}</h4>
          <p>{list.text}</p>
          <a href="#." className="knowMoreBtn btn text-white text-uppercase">
            {list.button}
          </a>
        </Col>
      ))}
    </>
  );
}
export default React.memo(Features);
