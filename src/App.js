import React from "react"; // Importing React library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing BrowserRouter, Route, and Routes components from react-router-dom
import Menu from "./pages/Menu/Menu.js"; // Importing Menu component from pages/Menu directory
import Events from "./pages/Events/Events.js"; // Importing Events component from pages/Events directory
import About from "./pages/About/About.js"; // Importing About component from pages/About directory
import Landing from "./pages/Landing/Landing.js"; // Importing Landing component from pages/Landing directory
import Games from "./pages/Games/Games.js"; // Importing Games component from pages/Games directory
import Nav from "./components/Nav/Nav.js"; // Importing Nav component from components/Nav directory
import Footer from "./components/Footer/Footer.js"; // Importing Footer component from components/Footer directory

// Functional component App
function App() {
  return (
    <Router>
      {" "}
      {/* Router component to enable routing */}
      <div className="body">
        {" "}
        {/* Main container with body class */}
        <Nav /> {/* Navigation component */}
        <div>
          <Routes>
            {" "}
            {/* Routes component for defining route configurations */}
            <Route path="/" element={<Landing />} />{" "}
            {/* Route for landing page */}
            <Route path="/menu" element={<Menu />} />{" "}
            {/* Route for menu page */}
            <Route path="/events" element={<Events />} />{" "}
            {/* Route for events page */}
            <Route path="/about" element={<About />} />{" "}
            {/* Route for about page */}
            <Route path="/games" element={<Games />} />{" "}
            {/* Route for games page */}
          </Routes>
        </div>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App; // Exporting App component for use in other modules
