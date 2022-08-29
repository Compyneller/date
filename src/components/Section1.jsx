import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Section1 = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img
            src="https://www.paymium.com/20220804082200/images/home-fees-section-nocard.png"
            alt=""
            className="w-100"
          />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">
            Join the Pioneering Bitcoin Exchange
          </h1>
          <h3>Defending Bitcoin since 2011</h3>
          <br />
          <p>
            Paymium has been offering a BTC/INR marketplace since the early days
            of Bitcoin. We build services that aim to make the Internet of Value
            more accessible to everyone, at a fair price.{" "}
          </p>
          <p>We practice cold storage of 99% of deposited Bitcoins.</p>
          <p>
            We offer deposit by bank transfer in INR. Trading on Paymium is one
            of the most competitive you can find online.{" "}
          </p>
          <br />
          <Button className=" w-25 hover__button">Sign Up</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
