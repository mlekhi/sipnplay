import React from "react";
import Insta from "./InstagramEmbed.js";
import TicTacToe from "../../components/TicTacToe/TicTacToe";
import AboutGoogleMap from "../../components/GoogleMaps/AboutGoogleMap";

function About() {
  const styles = {
    link: {
      fontSize: "20pt",
      textDecoration: "none",
      transition: "transform 0.2s ease",
      display: "inline-block", // Ensures inline block display for correct hover effect
    },
  };

  return (
    <div>
      <div className="App-header">
        <div className="w-full flex flex-col p-5 items-start bg-[#DEE9D3] shadow-inner rounded-3xl">
          <h1 className="text-4xl mb-5">Our Story</h1>
          <p className="text-start text-base mb-2">
            Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he
            combined them all to become Sip & Play, Park Slope’s first board game cafe. It is a
            straightforward concept, come in with your friends and family to play any board game
            from our library of 300+ games! We hope when you visit, you also enjoy our coffee,
            espresso, boba, sandwiches, and snacks!
          </p>
          <a
            style={styles.link}
            className="text-lg hover:scale-110 "
            href="https://www.exploretock.com/sipnplay">
            Make a Reservation!
          </a>
        </div>
        <div className="flex flex-row justify-around items-center p-4 w-full h-full">
          <div>
            <TicTacToe />
          </div>
          <div>
            {/* import map here */}
            <AboutGoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
