import React from "react";
import TicTacToe from "../../components/TicTacToe/TicTacToe"; // Importing TicTacToe component
import LeafletMap from "../../components/Map/LeafletMap"; // Importing LeafletMap component
import "./About.css"; // Importing local CSS styles for About component

function About() {
  // Inline styles object for the link
  const styles = {
    link: {
      fontSize: "18pt", // Setting font size to 18pt
      textDecoration: "none", // Removing underline from link
      transition: "transform 0.2s ease", // Adding smooth transform transition
      display: "inline-block", // Ensures the link behaves as an inline block element
    },
  };

  return (
    <div>
      <div className="App-header">
        {" "}
        {/* Main container with App-header class */}
        <div>
          <img
            src="/headers/about.png" // Image source path
            className="pointer-events-none relative z-10" // CSS classes for styling image
          />
          {/* Paragraph describing the founder and concept */}
          <p className="text-start text-base sm:text-xl mb-8 relative z-10">
            Founder, Jonathan Li, shares a passion for board games, boba, and
            delicious food, so he combined them all to become Sip & Play, Park
            Slope’s first board game cafe. It is a straightforward concept, come
            in with your friends and family to play any board game from our
            library of 300+ games! We hope when you visit, you also enjoy our
            coffee, espresso, boba, sandwiches, and snacks!
          </p>
          {/* Link to make a reservation with dynamic styling */}
          <a
            style={styles.link} // Applying inline styles to the anchor tag
            className="text-lg hover:scale-110 " // CSS classes with hover effect
            href="https://www.exploretock.com/sipnplay" // Reservation link
          >
            Make a Reservation!
          </a>
        </div>
        {/* Absolute positioned TicTacToe component on the left */}
        <div className="absolute top-[50px] left-4 slanted bg-white p-4 pointer-events-auto">
          <TicTacToe /> {/* Rendering TicTacToe component */}
        </div>
        {/* Absolute positioned TicTacToe component on the right */}
        <div className="absolute right-[20px] top-[400px] slanted2 bg-white p-4">
          <TicTacToe /> {/* Rendering TicTacToe component */}
        </div>
        {/* Flex container for LeafletMap component */}
        <div className="flex flex-col justify-center items-center z-10 relative pt-20">
          <LeafletMap /> {/* Rendering LeafletMap component */}
        </div>
      </div>
    </div>
  );
}

export default About; // Exporting About component for use in other modules
