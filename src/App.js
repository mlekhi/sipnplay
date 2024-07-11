
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./pages/Menu/Menu.js";
import Events from "./pages/Events/Events.js";
import About from "./pages/About/About.js";
import Landing from "./pages/Landing/Landing.js";

function App() {

  return (
    <Router>
      <div className="body">
        <div className="viewer">
          <Routes>
            <Route exact path="/" component={Landing} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={About} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;