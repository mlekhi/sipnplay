import React from "react";
import ObjectCanvas from "./ObjectCanvas";

const Dice = () => {
  return (
    <>
      <ObjectCanvas
        path="/assets/green_dice/scene.gltf"
        scale={3}
        height="100px"
        width="100px"
      />
    </>
  );
};

export default Dice;
