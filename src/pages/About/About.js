import React from "react";
import Insta from "./InstagramEmbed.js";
import "./About.css";

function About() {
  return (
    <div>
      <div className="App-header">
        <h1>Our Story</h1>
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

      <div className="Instagram-carousel">
        <Insta />
      </div>
    </div>
  );
}

export default About;
