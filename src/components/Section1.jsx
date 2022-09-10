import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GetItOnApple from "./GetItOnApple";
import GetItOnPlay from "./GetItOnPlay";
import image from "../assets/home-fees-section-nocard.png";
const Section1 = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img src={image} alt="" className="w-100" />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">
            Join the Pioneering Bitcoin Exchange
          </h1>
          <h3>Defending Bitcoin since 2022</h3>
          <br />
          <p>
            Date has been offering a BTC/INR marketplace since the early days of
            Bitcoin. We build services that aim to make the Internet of Value
            more accessible to everyone, at a fair price.{" "}
          </p>
          <p>We practice cold storage of 99% of deposited Bitcoins.</p>
          <p>
            We offer deposit by bank transfer in INR. Trading on Date is one of
            the most competitive you can find online.{" "}
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
      </Row>
    </Container>
  );
};

export default Section1;
