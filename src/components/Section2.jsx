import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">Lowest Fees on the Market</h1>
          <h3>-0.1% fee on all maker orders</h3>
          <br />
          <p>
            Yes, it is possible to have lower fees than no fees at all. Not only
            you no longer pay fees, but you also receive a 0.10% cashback
            directly on your Paymium account for each of your trades. Taker
            orders are charged with a 0.5% fee. <br />
            <br />
            Our maker fees are the most rewarding of the marke
          </p>
          <br />
          <Button className="hover__button" onClick={() => navigate("/otp")}>
            Sign Up
          </Button>
        </Col>
        <Col sm={12} lg={6}>
          <img
            className="w-100"
            src="https://www.paymium.com/20220804082200/images/markets-fees.png"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
