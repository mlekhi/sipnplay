import React, { useEffect, useState } from "react";
import Dice from "../../components/Canvas/Dice";
import Coffee from "../../components/Canvas/Coffee";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div className="App-header2">
        <h1>Sip & Play</h1>
        <div id="dice" className="dice">
          <Dice />
          <Dice />
          <Dice />
          <Dice />
        </div>
      </div>
      <div className="App-header">
        <p>
          Come on in with your friends and family and play boardgames from our
          collection of over 500+ games! Just $10 a person for 3 hours of
          gameplay. ($12 a person Friday-Sunday and Holidays) Play while
          enjoying bubble tea, coffee, beer sandwiches or salads and have a
          great time! If you want to guarantee a table, you can make a
          reservation which is $15 a person for 3 hours of gameplay.
        </p>
        <Coffee />
      </div>
    </div>
  );
}

export default Landing;
