import React from "react";
import Dice from "../../components/Canvas/Dice/Dice";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div
        // hero section of landing page, add background gradient image
        className="App-header2 bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundimage.png')" }}
      >
        {/* add 3d logo */}
        <img
          fetchpriority="high"
          src="logo512.png"
          className="logo"
          alt="Sip & Play Logo"
        />
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
        <div className="flex flex-row">
          <div className="text-start my-auto">
            <div className="pb-5">
              {" "}
              <p className="text-xs sm:text-base">
                Come on in with your friends and family. Pick from
              </p>
              <span className="bold-words text-sm sm:text-base">
                over 500+ games for just $10/person!
              </span>
              <p className="text-xs sm:text-base mb-2">
                ($12/person Friday-Sunday and Holidays)
              </p>
            </div>
            <div className="pb-5">
              {" "}
              <p className="text-xs sm:text-base">
                Enjoy 3 hours of gameplay while savouring
              </p>
              <span className="bold-words text-sm sm:text-base">
                bubble tea, coffee, beer, sandwiches & salads!
              </span>
            </div>
            <div>
              {" "}
              <p className="text-xs sm:text-base">
                If you want to guarantee a table,
              </p>
              <span className="bold-words text-sm sm:text-base">
                reserve for $15 per person!
              </span>
            </div>
          </div>
          <div className="relative w-64 h-64">
            <div className="absolute inset-2 top-1/2 left-[60%] transform -translate-x-3/4 -translate-y-1/4 bg-[#DEE9D3] rounded-full w-3/5 h-2/5 md:h-3/5 "></div>
            <img
              alt="boba drink"
              src="/images/bubble-tea-on-a-plastic-bottle.png"
              className="absolute inset-0 m-auto w-4/5 h-4/5 object-contain z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
