import React from "react";
import { Card, Container } from "react-bootstrap";

const Message = () => {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center login__container"
      style={{ minHeight: "80vh" }}
    >
      <Card className="w-100" style={{ borderRadius: "0" }}>
        <div
          className="w-100 py-4 text-light d-flex mb-5 "
          style={{ background: "#3F43AD" }}
        >
          <h1 className="section__heading m-auto">Welcome to Date!</h1>
        </div>

        <Card.Body>
          <p>You will promptly receive an email to confirm your account.</p>
          <p>
            If you do not receive our confirmation email in your inbox within
            minutes, please do not forget to check your spam folder as well.
          </p>
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
};

export default Message;
