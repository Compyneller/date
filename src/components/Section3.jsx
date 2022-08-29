import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import video from "../assets/Y2Mate.is - India Map - Video Clip-O1nKvNC-A7g-1080p-1660422745333.mp4";
const Section3 = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          {/* <img
            src="https://www.paymium.com/20220804082200/images/bg-map.png"
            className="w-100"
            alt=""
          /> */}
          <video src={video} autoPlay muted loop className="w-100"></video>
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">Based in India</h1>
          <h3>Service complying with Indian regulation</h3>
          <br />
          <p>
            Pioneering in cryptocurrency trading since 2011, Paymium is
            registered as a Digital Asset Service Provider (DASP) with the
            Autorité des Marchés Financiers (AMF) under the registration number{" "}
          </p>
          <br />
          <img
            src="https://www.paymium.com/20220804082200/images/amf-logo.png"
            alt=""
            className="w-100"
          />
          <br />
          <Button className="hover__button" onClick={() => navigate("/otp")}>
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
