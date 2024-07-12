import React from "react";
import TicTacToe from "../../components/TicTacToe/TicTacToe";
import LeafletMap from "../../components/Map/LeafletMap";
import "./About.css";

function About() {
  const styles = {
    link: {
      fontSize: "18pt",
      textDecoration: "none",
      transition: "transform 0.2s ease",
      display: "inline-block", // Ensures inline block display for correct hover effect
    },
  };

  return (
    <div>
      <div className="App-header">
        <div>
          <img
            src="/headers/about.png"
            className="pointer-events-none relative z-10"
          />
          <p className="text-start text-base sm:text-xl mb-8 relative z-10">
            Founder, Jonathan Li, shares a passion for board games, boba, and
            delicious food, so he combined them all to become Sip & Play, Park
            Slope’s first board game cafe. It is a straightforward concept, come
            in with your friends and family to play any board game from our
            library of 300+ games! We hope when you visit, you also enjoy our
            coffee, espresso, boba, sandwiches, and snacks!
          </p>
          <a
            style={styles.link}
            className="text-lg hover:scale-110 "
            href="https://www.exploretock.com/sipnplay"
          >
            Make a Reservation!
          </a>
        </div>
        <div className="absolute top-[50px] left-4 slanted bg-white p-4 pointer-events-auto">
          <TicTacToe />
        </div>
        <div className="absolute right-[20px] top-[400px] slanted2 bg-white p-4">
          <TicTacToe />
        </div>
        <div className="flex flex-col justify-center items-center z-10 relative pt-20">
          <LeafletMap />
        </div>
      </div>
    </div>
  );
}

export default About;
