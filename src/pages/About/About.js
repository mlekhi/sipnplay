import React from "react";
import Insta from "./InstagramEmbed.js";

function About() {
  const styles = {
    link: {
      fontSize: "20pt",
      textDecoration: "none",
      transition: "transform 0.2s ease",
      display: "inline-block", // Ensures inline block display for correct hover effect
    },
    linkHover: {
      transform: "scale(1.1)",
    },
  };

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
        <a style={styles.link} href="https://www.exploretock.com/sipnplay">
          Make a Reservation
        </a>
      </div>
    </div>
  );
}

export default About;
