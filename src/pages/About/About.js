// include carousel with board game selection

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./About.css";

function About() {
  return (
    <div>
      <div className="App-header">
        <p>
          Founder, Jonathan Li, shares a passion for board games, boba, and
          delicious food, so he combined them all to become Sip & Play, Park
          Slope’s first board game cafe. It is a straightforward concept, come
          in with your friends and family to play any board game from our
          library of 300+ games! We hope when you visit, you also enjoy our
          coffee, espresso, boba, sandwiches, and snacks!
        </p>
        <a href="https://www.exploretock.com/sipnplay">Make a Reservation</a>
      </div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        centerMode
        centerSlidePercentage={33.33}
        showStatus={false}
        dynamicHeight={false}
        emulateTouch
        transitionTime={400}
        interval={1000}
        showIndicators={false}
        className="carousel"
      >
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 1"
            className="carousel-image"
          />
          <p className="legend">Game 1</p>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 2"
            className="carousel-image"
          />
          <p className="legend">Game 2</p>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 3"
            className="carousel-image"
          />
          <p className="legend">Game 3</p>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 4"
            className="carousel-image"
          />
          <p className="legend">Game 4</p>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 5"
            className="carousel-image"
          />
          <p className="legend">Game 5</p>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Game 6"
            className="carousel-image"
          />
          <p className="legend">Game 6</p>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
