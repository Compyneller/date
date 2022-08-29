import React, { useState } from "react";
import { Alert, Button, Card, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, pass);
      navigate("/");
    } catch (error) {
      setError("Wrong Credential");
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
          <h1 className="section__heading m-auto">Login</h1>
        </div>

        <Form onSubmit={handleLogin}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ borderRadius: "0" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-5 w-75 mx-auto"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={{ borderRadius: "0" }}
            />
          </Form.Group>
          <Button
            variant="dark"
            className="w-100 py-3"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Login
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
        to="/forgot-password"
        style={{ textDecoration: "none" }}
      >
        Forgot your password?
      </Link>
    </Container>
  );
};

export default Login;
