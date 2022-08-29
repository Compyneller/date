import React, { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import Toastify from "toastify-js";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useUserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const data = await resetPassword(email);
      setMessage(true);
      navigate("/message");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
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
          <h1 className="section__heading m-auto">Forgot Password</h1>
        </div>

        <Form onSubmit={handleLogin}>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && (
            <Alert variant="success">
              Check your inbox for further instructions
            </Alert>
          )}
          <Form.Group className="mb-5 w-75 mx-auto" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ borderRadius: "0" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            className="w-100 py-3"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Submit
          </Button>
        </Form>
      </Card>
      <br />

      <Link
        className="text-center"
        to="/otp"
        style={{ textDecoration: "none" }}
      >
        You don't have an account yet?
      </Link>
      <Link
        className="text-center"
        to="/otp"
        style={{ textDecoration: "none" }}
      >
        Forgot your password?
      </Link>
    </Container>
  );
};

export default ForgetPassword;
