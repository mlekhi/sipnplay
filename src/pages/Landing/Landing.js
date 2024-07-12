import React from "react";
import Dice from "../../components/Canvas/Dice/Dice";
import Coffee from "../../components/Canvas/Landing/Coffee";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div
      // hero section of landing page, add background gradient image
        className="App-header2 bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundimage.png')" }}>
          {/* add 3d logo */}
        <img fetchpriority="high" src="logo512.png" className="logo" alt="Sip & Play Logo" />
        {/* add 3d dice models with various rotations for diversity */}
        <div id="dice" className="dice">
          <Dice rotate={[1, 1, 1]} />
          <Dice rotate={[1, -1, 1]} />
          <Dice rotate={[-1, 1, 1]} />
          <Dice rotate={[1, 1, -1]} />
        </div>
      </div>
      {/* below hero section with more info about sipnplay */}
      <div className="App-header">
        <p>Come on in with your friends and family. Play from our collection of over </p>
        <span className="bold-words">500+ games for just $10/person!</span>
        <p>($12/person Friday-Sunday and Holidays)</p>
        <p>Enjoy 3 hours of gameplay while savouring</p>
        <span className="bold-words">bubble tea, coffee, beer, sandwiches or salads!</span>
        <p>If you want to guarantee a table, you can make a</p>
        <span className="bold-words">reservation for $15 a person!</span>

        {/* add 3d coffee model */}
        <Coffee />
      </div>
    </div>
  );
}

export default Landing;
