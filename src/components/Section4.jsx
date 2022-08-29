import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

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
          <h3>All Paymium in the palm of the hand</h3>
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
          <div className="w-100 d-flex">
            <a
              href="https://play.google.com/store/apps/details?id=com.inrd.app"
              target="_blank"
              className="hover__button py-2 px-3 me-3"
              style={{ textDecoration: "none" }}
            >
              Android
            </a>
            <a
              href="https://apps.apple.com/in/app/date-trading-exchange/id1639180835"
              target="_blank"
              className="hover__button py-2 px-3 "
              style={{ textDecoration: "none" }}
            >
              iOS
            </a>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <img
            src="https://www.paymium.com/20220804082200/images/mobile-app-en.png"
            alt=""
            className="w-100"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
