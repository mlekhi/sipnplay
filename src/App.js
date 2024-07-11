import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/Menu.js";
import Events from "./pages/Events/Events.js";
import About from "./pages/About/About.js";
import Landing from "./pages/Landing/Landing.js";
// import Nav from "./components/Nav/Nav.js";
// import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="body">
        {/* <Nav /> */}
        <div className="viewer">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
