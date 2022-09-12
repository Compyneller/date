import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/oie_dkLNRDsfmxAM.png";
const Footer = () => {
  return (
    <div className="w-100 footer__container py-5">
      <Container>
        <Row className="g-3 d-flex align-items-center">
          <Col
            sm={6}
            lg={4}
            className="d-flex flex-column  justify-content-center"
          >
            <img src={image} className="w-25" alt="" />
            <br />

            <p>
              The purpose of this website is solely to display information
              regarding the products and services available on the DATE App. It
              is not intended to offer access to any of such products and
              services. You may obtain access to such products and services on
              the DATE App. Please note that the availability of the products
              and services on the DATE App is subject to jurisdictional
              limitations. DATE may not offer certain products, features, and/or
              services on the DATE App in certain jurisdictions due to potential
              or actual regulatory restrictions.
            </p>
          </Col>

          <Col
            sm={6}
            lg={2}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/">Support</Link>
          </Col>
          <Col
            sm={6}
            lg={2}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/tc" onClick={() => window.scroll(0, 0)}>
              Terms and Conditions
            </Link>
          </Col>
          <Col
            sm={6}
            lg={2}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/privacy-policy" onClick={() => window.scroll(0, 0)}>
              Privacy Policy
            </Link>
          </Col>
          <Col
            sm={6}
            lg={2}
            className="d-flex aling-items-center justify-content-center"
          >
            <Link to="/contact-us" onClick={() => window.scroll(0, 0)}>
              Contact Us
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
