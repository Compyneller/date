import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../assets/markets-fees.jpg";
import GetItOnApple from "./GetItOnApple";
import GetItOnPlay from "./GetItOnPlay";
import wazir from "../assets/download.png";
import kuber from "../assets/download.svg";
import zebpay from "../assets/ZebPay-1.svg";
import dcx from "../assets/Logo_CoinDCX.svg";
const Section2 = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="section__heading">Lowest Fees on the Market</h1>
          <h3>0% fee on all maker orders</h3>
          <br />
          <p>
            Yes, it is possible to have lower fees than no fees at all. Not only
            you no longer pay fees, but you also receive a 0.10% cashback
            directly on your Date account for each of your trades. Taker orders
            are charged with a 0% fee. <br />
            <br />
            Our maker fees are the most rewarding of the marke
          </p>
          <br />
          <Row className="g-3 hero__app__buttons">
            <div className="col-6">
              <GetItOnPlay />
            </div>
            <div className="col-6">
              <GetItOnApple />
            </div>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <img className="w-100" src={image} alt="" />
          <Card>
            <Card.Body>
              <Row className="g-3">
                <div className="col-3">
                  <img
                    src={wazir}
                    alt=""
                    className="w-100"
                    style={{ filter: "invert(1)" }}
                  />
                </div>
                <div className="col-9 d-flex justify-content-end">
                  <h3>0.2%</h3>
                </div>
              </Row>
              <br />

              <Row className="g-3">
                <div className="col-3">
                  <img src={kuber} alt="" className="w-100" />
                </div>
                <div className="col-9 d-flex justify-content-end">
                  <h3>0.2%</h3>
                </div>
              </Row>
              <br />

              <Row className="g-3">
                <div className="col-3">
                  <img src={dcx} alt="" className="w-100" />
                </div>
                <div className="col-9 d-flex justify-content-end">
                  <h3>0.2%</h3>
                </div>
              </Row>
              <br />

              <Row className="g-3">
                <div className="col-3">
                  <img src={zebpay} alt="" className="w-100" />
                </div>
                <div className="col-9 d-flex justify-content-end">
                  <h3>0.2%</h3>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
