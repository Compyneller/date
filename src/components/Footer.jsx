import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-100 footer__container">
      <Container>
        <Row className="g-3">
          <Col
            sm={6}
            lg={3}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/">FAQ</Link>
          </Col>
          <Col
            sm={6}
            lg={3}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/">Support</Link>
          </Col>
          <Col
            sm={6}
            lg={3}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/tc" onClick={() => window.scroll(0, 0)}>
              Terms and Conditions
            </Link>
          </Col>
          <Col
            sm={6}
            lg={3}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/privacy-policy" onClick={() => window.scroll(0, 0)}>
              Privacy Policy
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
