import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const BottomHero = () => {
  return (
    <div className="py-4" style={{ background: "#E0E1F2" }}>
      <Container
        // className="d-flex align-items-center justify-content-between "
        style={{ color: "#3F43AD", fontWeight: "200" }}
      >
        <Row className="g-3">
          <Col sm={12} lg={4}>
            <h1>New!</h1>
          </Col>
          <Col sm={12} lg={4} className="d-flex align-items-center">
            <h5>Start your Bitcoin Recurring Buy Plan Now!</h5>
          </Col>
          <Col lg={4} className="bottom__button">
            <Button
              variant="outline-primary"
              style={{
                border: "1px solid #3F43AD",
                borderRadius: "0",
                color: "#3F43AD",
              }}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomHero;
