import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/kanchanara-rhm7H8X5J98-unsplash.jpg";
const WhatIsBitCoin = () => {
  return (
    <Container className="py-5">
      <h1>What Is Bitcoin?</h1>
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <p>
            Bitcoin is a cryptocurrency, a virtual currency designed to act as
            money and a form of payment outside the control of any one person,
            group, or entity, and thus removing the need for third-party
            involvement in financial transactions. It is rewarded to blockchain
            miners for the work done to verify transactions and can be purchased
            on several exchanges.
            <br />
            <br />
            Bitcoin was introduced to the public in 2009 by an anonymous
            developer or group of developers using the name Satoshi Nakamoto.
            <br />
            <br />
            It has since become the most well-known cryptocurrency in the world.
            Its popularity has inspired the development of many other
            cryptocurrencies. These competitors either attempt to replace it as
            a payment system or are used as utility or security tokens in other
            blockchains and emerging financial technologies.
            <br />
            <br />
            Learn more about the cryptocurrency that started it all—the history
            behind it, how it works, how to get it, and what it can be used for.
          </p>
        </Col>
        <Col sm={12} lg={6}>
          <img src={image} alt="" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsBitCoin;
