import axios from "axios";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

const ModalComp = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      mobile_no: localStorage.getItem("mobile"),
      country_code: 91,
      otp: otp,
    };
    try {
      const { data } = await axios.post(
        "https://www.inrdweb.com:4100/playpenny/verifyCode",
        body
      );
      if (data.success) {
        Toastify({
          text: "User Verify Successfully",

          duration: 3000,
        }).showToast();
        navigate("/signup");
      }
    } catch (error) {
      Toastify({
        text: error.message,

        duration: 3000,
      }).showToast();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ borderRadius: "0" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="w-100 py-4 text-light d-flex mb-5 "
          style={{ background: "#3F43AD" }}
        >
          <h1 className="section__heading m-auto">Enter OTP</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5 w-75 mx-auto" controlId="formBasicEmail">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter OTP"
              style={{ borderRadius: "0" }}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            className="w-100 py-3"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Verify OTP
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComp;
