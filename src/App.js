
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./components/Menu/Menu.js";
import Events from "./components/Events/Events.js";
import About from "./components/About/About.js";
import Landing from "./components/Landing/Landing.js";

function App() {

  return (
    <Router>
      <Menu />
      <div className="body">
        <div className="viewer">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;