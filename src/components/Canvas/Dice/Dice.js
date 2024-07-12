// Dice component rendering an ObjectCanvas with a specified rotation angle
import React from "react";
import ObjectCanvas from "./ObjectCanvas";

const Dice = ({ rotate }) => {
  return (
    <>
      {/* Render ObjectCanvas component with a GLTF model of a green dice */}
      <ObjectCanvas path="/assets/green_dice/scene.gltf" rotate={rotate} />
    </>
  );
};

export default Dice;
