import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/kanchanara-Lta5b8mPytw-unsplash.jpg";
const Fees = () => {
  return (
    <Container>
      <h1>0% Maker & Taker Fee</h1>
      <Row className="g-3">
        <Col sm={12} lg={6}></Col>
        <Col sm={12} lg={6}>
          <img src={image} alt="" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Fees;
