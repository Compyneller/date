import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/3D App screen.png";

import GetItOnApple from "./GetItOnApple";
import GetItOnPlay from "./GetItOnPlay";
const Section4 = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">Try the mobile app!</h1>
          <h3>All Date in the palm of the hand</h3>
          <br />
          <p>
            Buy and sell bitcoins wherever you are, follow the market and create
            your alerts to be aware of all price evolutions in real time. Access
            your transactions history and manage precisely your positions.
            <br />
            <br />
            Bitcoin payment terminal is included in the application
          </p>
          <br />
          <div className="d-flex" style={{ gap: "1rem" }}>
            <GetItOnPlay />
            <GetItOnApple />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <img className="w-75" src={image1} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
