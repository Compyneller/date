import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/DATE_Web banner 02_12 sep'22.jpg";
import image2 from "../../assets/DATE_Web banner 01_12 sep'22.jpg";
import "./CarouselComp.css";
const CarouselComp = () => {
  return (
    <Carousel
      fade
      controls={false}
      indicators={false}
      className="carousel__comp__container"
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel__comp__img"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel__comp__img"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
