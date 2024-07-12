import React from "react";
import Dice from "../../components/Canvas/Dice/Dice";
import Coffee from "../../components/Canvas/Landing/Coffee";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div className="App-header2">
        <img src="logo512.png" className="logo" alt="Sip & Play Logo" />
        <div id="dice" className="dice">
          <Dice rotate={[1, 1, 1]} />
          <Dice rotate={[1, -1, 1]} />
          <Dice rotate={[-1, 1, 1]} />
          <Dice rotate={[1, 1, -1]} />
        </div>
      </div>
      <div className="App-header">
        <p>Come on in with your friends and family. Play from our collection of over </p>
        <span className="bold-words">500+ games for just $10/person!</span>
        <p>($12/person Friday-Sunday and Holidays)</p>
        <p>Enjoy 3 hours of gameplay while savouring</p>
        <span className="bold-words">bubble tea, coffee, beer, sandwiches or salads</span>
        <p>If you want to guarantee a table, you can make a</p>
        <span className="bold-words">reservation for $15 a person</span>
        <Coffee />
      </div>
    </div>
  );
}

export default Landing;
