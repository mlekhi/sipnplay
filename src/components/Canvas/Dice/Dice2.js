import React from "react";
import ObjectCanvas from "./ObjectCanvas.js";

const Dice = ({ rotate }) => {
  return (
    <>
      <ObjectCanvas path="/assets/green_dice/scene.gltf" rotate={rotate} />
    </>
  );
};

export default Dice;
