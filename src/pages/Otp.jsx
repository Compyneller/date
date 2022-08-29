import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import ModalComp from "../components/ModalComp";
import Toastify from "toastify-js";
const Otp = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      mobile_no: mobile,
      country_code: 91,
    };
    try {
      const { data } = await axios.post(
        "https://www.inrdweb.com:4100/playpenny/sendCode",
        body
      );
      if (data.status === "pending") {
        Toastify({
          text: "OTP sent on your Number",

          duration: 3000,
        }).showToast();
        localStorage.setItem("mobile", mobile);
        setModalShow(true);
      }
    } catch (error) {
      Toastify({
        text: error.message,

        duration: 3000,
      }).showToast();
    }
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
          <h1 className="section__heading m-auto">Verify User</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5 w-75 mx-auto" controlId="formBasicMobile">
            <Form.Label>Email Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Mobile Number"
              style={{ borderRadius: "0" }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            className="w-100 py-3"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Send OTP
          </Button>
        </Form>
      </Card>
      <ModalComp show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default Otp;
