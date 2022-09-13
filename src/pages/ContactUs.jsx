import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Card className="shadow w-100 py-5">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Contact Us</h1>
          <br />
          <br />
          <Row className="g-3 contact__row">
            <Col sm={6} lg={4}>
              <a
                className="text-dark"
                href="mailto:digitalassethelp@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <Card className="shadow">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      height={90}
                      src="https://img.icons8.com/fluency/344/new-post.png"
                      alt=""
                    />
                    <h5 className="my-3">Email</h5>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col sm={6} lg={4}>
              <a
                href="https://twitter.com/date_platform"
                className="text-dark"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Card className="shadow">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      height={90}
                      src="https://img.icons8.com/fluency/344/twitter.png"
                      alt=""
                    />
                    <h5 className="my-3">Twitter</h5>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col sm={6} lg={4}>
              <Card className="shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    height={90}
                    src="https://img.icons8.com/fluency/344/telegram-app.png"
                    alt=""
                  />
                  <h5 className="my-3">Telegram</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
