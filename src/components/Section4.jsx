import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/unnamed (3).webp";
import image2 from "../assets/unnamed (4).webp";
import image3 from "../assets/unnamed (5).webp";
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
          <Row className="g-3 hero__app__buttons">
            <div className="col-6">
              <GetItOnPlay />
            </div>
            <div className="col-6">
              <GetItOnApple />
            </div>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <Row className="g-3">
            <div className="col-4">
              <img src={image1} alt="" className="w-100" />
            </div>
            <div className="col-4">
              <img src={image2} alt="" className="w-100" />
            </div>
            <div className="col-4">
              <img src={image3} alt="" className="w-100" />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
