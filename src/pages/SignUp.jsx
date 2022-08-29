import React, { useState, useEffect } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useUserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    const data = {
      name,
      email,
      pass,
    };
    e.preventDefault();
    if (data.password !== data.confirmpassword) {
      return setError("Password do not match");
    }
    if (data.password !== data.confirmpassword) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      const res = await signUp(data.email, data.pass);
      await setDoc(doc(db, "users", res.user.uid), {
        data,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center login__container"
      style={{ minHeight: "80vh" }}
    >
      <Card className="w-100" style={{ borderRadius: "0" }}>
        <div
          className="w-100 py-4 text-light d-flex mb-5 "
          style={{ background: "#3F43AD" }}
        >
          <h1 className="section__heading m-auto">Sign Up</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              style={{ borderRadius: "0" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              style={{ borderRadius: "0" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 w-75 mx-auto"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ borderRadius: "0" }}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-5 w-75 mx-auto"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              style={{ borderRadius: "0" }}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            className="w-100 py-3"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUp;
