import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GetItOnApple from "./GetItOnApple";
import GetItOnPlay from "./GetItOnPlay";

const Hero = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-center flex-column"
        >
          <h1 className="hero__heading">The Longest Standing</h1>
          <h1 className="hero__heading" style={{ color: "#3F43AD" }}>
            Bitcoin Exchange
          </h1>
          <br />
          <h5 className="hero__text">Buy and Sell Bitcoins (BTC) in INR.</h5>
          <br />
          <Button
            className=" hero__button"
            style={{ borderRadius: "0", background: "#3F43AD" }}
          >
            Start Trading
          </Button>
          <br />
          <br />
          <div className="d-flex" style={{ gap: "1rem" }}>
            <GetItOnPlay />
            <GetItOnApple />
          </div>
          <br />
          <h5 className="hero__text">
            Based in{" "}
            <span>
              <img
                height={50}
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-india_1f1ee-1f1f3.png"
                alt=""
              />
            </span>{" "}
            since 2022
          </h5>
        </Col>
        <Col sm={12} lg={6} className="hero__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            className="w-100"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
