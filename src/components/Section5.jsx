import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Section5 = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img
            src="https://www.paymium.com/20220804082200/images/advanced-trading@2x.png"
            alt=""
            className="w-100"
          />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">Advance Trading</h1>
          <h3>A new approach on trading</h3>
          <br />
          <p>
            Elegant and precise graphs, updated in real time, on a single
            screen. Advanced features for expert traders, including
            customisation tools: colors, type of graph, etc.
          </p>
          <Button className="hover__button">View the Interface</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
